// Critical CSS component to inline essential styles and prevent render blocking
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-the-fold styles - inlined to prevent render blocking */
          :root {
            --background: 248 250 252;
            --foreground: 15 23 42;
            --primary: 249 115 22;
          }
          
          .dark {
            --background: 2 6 23;
            --foreground: 248 250 252;
          }
          
          * {
            box-sizing: border-box;
            border: 0 solid #e2e8f0;
          }
          
          html {
            scroll-behavior: smooth;
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          }
          
          body {
            margin: 0;
            min-height: 100vh;
            background: rgb(var(--background));
            color: rgb(var(--foreground));
            font-feature-settings: normal;
            font-variation-settings: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Header styles */
          header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .dark header {
            background: rgba(15, 23, 42, 0.8);
            border-bottom: 1px solid rgba(51, 65, 85, 0.2);
          }
          
          /* Hero section critical styles */
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            background: linear-gradient(to bottom right, rgb(248 250 252), rgb(219 234 254), rgb(224 231 255));
            padding-top: 80px;
          }
          
          .dark .hero-section {
            background: linear-gradient(to bottom right, rgb(15 23 42), rgb(30 58 138), rgb(67 56 202));
          }
          
          .hero-container {
            max-width: 1024px;
            margin: 0 auto;
            padding: 0 1.5rem;
            position: relative;
            z-index: 10;
            text-align: center;
          }
          
          .hero-heading {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.1;
            background: linear-gradient(to right, rgb(15 23 42), rgb(67 56 202), rgb(15 23 42));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .dark .hero-heading {
            background: linear-gradient(to right, rgb(255 255 255), rgb(196 181 253), rgb(255 255 255));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          @media (min-width: 768px) {
            .hero-heading {
              font-size: 4.5rem;
            }
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            color: rgb(100 116 139);
            margin-bottom: 3rem;
            max-width: 32rem;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.7;
          }
          
          .dark .hero-subtitle {
            color: rgb(148 163 184);
          }
          
          @media (min-width: 768px) {
            .hero-subtitle {
              font-size: 1.5rem;
            }
          }
          
          /* Button styles */
          .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            white-space: nowrap;
            border-radius: 0.75rem;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 300ms;
            padding: 0.75rem 2rem;
            background: linear-gradient(to right, rgb(249 115 22), rgb(251 146 60));
            color: white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            text-decoration: none;
            border: none;
            cursor: pointer;
          }
          
          .btn-primary:hover {
            background: linear-gradient(to right, rgb(251 146 60), rgb(251 191 36));
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            transform: scale(1.05);
          }
          
          /* Navigation styles */
          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .logo {
            font-size: 1.5rem;
            font-weight: 700;
            transition: all 300ms;
          }
          
          .logo-accent {
            color: rgb(249 115 22);
          }
          
          .logo-text {
            color: rgb(71 85 105);
          }
          
          .dark .logo-text {
            color: rgb(148 163 184);
          }
          
          /* Hide non-critical content initially */
          .below-fold {
            visibility: hidden;
          }
          
          /* Focus styles for accessibility */
          *:focus-visible {
            outline: 2px solid rgb(249 115 22);
            outline-offset: 2px;
          }
        `,
      }}
    />
  )
}