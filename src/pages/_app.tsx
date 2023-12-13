import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Include the link tag for Roboto font */}
      <link
        rel="stylesheet"
        href="https://fonts.google.com/specimen/Afacad?stroke=Sans+Serif"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&display=swap"
      />

      {/* Your app content */}
      <Component {...pageProps} />
    </>
  );
}
