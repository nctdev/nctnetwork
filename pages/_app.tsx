import '../styles/globals.css'; // Adjust the path if your CSS file is located elsewhere
import { ThemeProvider } from 'next-themes'; // If you're using next-themes
import type { AppProps } from 'next/app'; // Import AppProps

function MyApp({ Component, pageProps }: AppProps) { // Use AppProps for typing
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp; 