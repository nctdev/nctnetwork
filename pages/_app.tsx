import '../styles/globals.css'; // Adjust the path if your CSS file is located elsewhere
import { ThemeProvider } from 'next-themes'; // If you're using next-themes

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp; 