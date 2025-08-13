import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Validate URL format
    let validUrl: URL
    try {
      validUrl = new URL(url)
      if (!['http:', 'https:'].includes(validUrl.protocol)) {
        throw new Error('Invalid protocol')
      }
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 })
    }

    // Fetch the webpage
    const response = await fetch(validUrl.toString(), {
      headers: {
        'User-Agent': 'NCTNetwork-Tools/1.0 (+https://nctnetwork.co.uk/tools)'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    
    // Convert HTML to markdown using a simple conversion
    const markdown = htmlToMarkdown(html)

    return NextResponse.json({ markdown })
  } catch (error) {
    console.error('Error converting URL to markdown:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to convert URL to markdown' },
      { status: 500 }
    )
  }
}

function htmlToMarkdown(html: string): string {
  // Remove script and style tags and their content
  let content = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  content = content.replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
  
  // Remove HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, '')
  
  // Extract title
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  let title = titleMatch ? titleMatch[1].trim() : ''
  
  // Clean title from common patterns like " | Site Name"
  title = title.replace(/\s*\|\s*[^|]*$/, '').trim()
  
  // Try to extract main content area first - look for common content containers
  let mainContent = content
  
  // Try to find main content area using common selectors
  const contentSelectors = [
    /<main[^>]*>([\s\S]*?)<\/main>/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i,
    /<div[^>]*class="[^"]*(?:content|post|article|entry|main)[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*id="[^"]*(?:content|post|article|entry|main)[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
  ]
  
  for (const selector of contentSelectors) {
    const match = content.match(selector)
    if (match) {
      mainContent = match[1]
      break
    }
  }
  
  // Remove common non-content elements
  mainContent = mainContent
    // Remove navigation elements
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
    .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, '')
    
    // Remove common UI elements
    .replace(/<div[^>]*class="[^"]*(?:cookie|popup|modal|overlay|sidebar|widget|ad|banner)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
    .replace(/<div[^>]*id="[^"]*(?:cookie|popup|modal|overlay|sidebar|widget|ad|banner)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
    
    // Remove forms and buttons (except content buttons)
    .replace(/<form[^>]*>[\s\S]*?<\/form>/gi, '')
    .replace(/<button[^>]*>[\s\S]*?<\/button>/gi, '')
    .replace(/<input[^>]*\/?>/gi, '')
    
    // Remove SVG and other non-content elements
    .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
    .replace(/<canvas[^>]*>[\s\S]*?<\/canvas>/gi, '')
  
  // Convert HTML elements to markdown
  let markdown = mainContent
    // Headers (clean up any existing formatting)
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (match, content) => `# ${cleanTextContent(content)}\n\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (match, content) => `## ${cleanTextContent(content)}\n\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (match, content) => `### ${cleanTextContent(content)}\n\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (match, content) => `#### ${cleanTextContent(content)}\n\n`)
    .replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, (match, content) => `##### ${cleanTextContent(content)}\n\n`)
    .replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, (match, content) => `###### ${cleanTextContent(content)}\n\n`)
    
    // Strong/Bold
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/(strong|b)>/gi, (match, tag, content) => `**${cleanTextContent(content)}**`)
    
    // Emphasis/Italic
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/(em|i)>/gi, (match, tag, content) => `*${cleanTextContent(content)}*`)
    
    // Code blocks and inline code
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (match, content) => `\`\`\`\n${cleanTextContent(content)}\n\`\`\`\n\n`)
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (match, content) => `\`${cleanTextContent(content)}\``)
    
    // Blockquotes
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (match, content) => {
      const cleaned = cleanTextContent(content).split('\n').map(line => `> ${line}`).join('\n')
      return `${cleaned}\n\n`
    })
    
    // Links (clean URLs by removing tracking parameters)
    .replace(/<a[^>]*href=["\']([^"\']*)["\'][^>]*>([\s\S]*?)<\/a>/gi, (match, url, linkText) => {
      const cleanUrl = cleanLinkUrl(url)
      const cleanText = cleanTextContent(linkText)
      return cleanText ? `[${cleanText}](${cleanUrl})` : ''
    })
    
    // Images
    .replace(/<img[^>]*src=["\']([^"\']*)["\'][^>]*alt=["\']([^"\']*)["\'][^>]*\/?>/gi, '![$2]($1)')
    .replace(/<img[^>]*alt=["\']([^"\']*)["\'][^>]*src=["\']([^"\']*)["\'][^>]*\/?>/gi, '![$1]($2)')
    .replace(/<img[^>]*src=["\']([^"\']*)["\'][^>]*\/?>/gi, '![]($1)')
    
    // Lists (better handling)
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
      const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || []
      const listItems = items.map((item: string) => {
        const itemContent = item.replace(/<\/?li[^>]*>/gi, '')
        return `- ${cleanTextContent(itemContent)}`
      }).join('\n')
      return `${listItems}\n\n`
    })
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
      const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || []
      const listItems = items.map((item: string, index: number) => {
        const itemContent = item.replace(/<\/?li[^>]*>/gi, '')
        return `${index + 1}. ${cleanTextContent(itemContent)}`
      }).join('\n')
      return `${listItems}\n\n`
    })
    
    // Paragraphs
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match, content) => {
      const cleaned = cleanTextContent(content)
      return cleaned ? `${cleaned}\n\n` : ''
    })
    
    // Divs and spans (just extract text content)
    .replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, (match, content) => {
      const cleaned = cleanTextContent(content)
      return cleaned ? `${cleaned}\n\n` : ''
    })
    
    // Line breaks
    .replace(/<br[^>]*\/?>/gi, '\n')
    
    // Remove any remaining HTML tags
    .replace(/<[^>]+>/g, ' ')
    
  // Decode HTML entities comprehensively
  markdown = decodeHtmlEntities(markdown)
  
  // Clean up whitespace and formatting
  markdown = markdown
    // Remove multiple consecutive newlines
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    // Remove spaces at the beginning/end of lines
    .replace(/^[ \t]+|[ \t]+$/gm, '')
    // Remove multiple spaces
    .replace(/[ \t]+/g, ' ')
    // Trim
    .trim()

  // Add title at the beginning if found
  if (title) {
    markdown = `# ${title}\n\n${markdown}`
  }

  return markdown || 'No content found'
}

function cleanTextContent(html: string): string {
  return html
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
}

function cleanLinkUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    // Remove common tracking parameters
    const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'ref', 'affiliate', 'aff']
    trackingParams.forEach(param => urlObj.searchParams.delete(param))
    return urlObj.toString()
  } catch {
    return url
  }
}

function decodeHtmlEntities(text: string): string {
  const entities: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&nbsp;': ' ',
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™',
    '&mdash;': '—',
    '&ndash;': '–',
    '&hellip;': '…',
    '&laquo;': '«',
    '&raquo;': '»',
    '&ldquo;': '"',
    '&rdquo;': '"',
    '&lsquo;': '\'',
    '&rsquo;': '\'',
    '&bull;': '•',
    '&middot;': '·',
    '&sect;': '§',
    '&para;': '¶',
    '&dagger;': '†',
    '&Dagger;': '‡',
  }
  
  // Replace named entities
  for (const [entity, replacement] of Object.entries(entities)) {
    text = text.replace(new RegExp(entity, 'g'), replacement)
  }
  
  // Replace numeric entities (decimal)
  text = text.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(parseInt(dec, 10))
  })
  
  // Replace numeric entities (hexadecimal)
  text = text.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16))
  })
  
  return text
}