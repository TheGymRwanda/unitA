import '/styles/globals.css';
import localFont from '@next/font/local';
const neufileGrotesk = localFont({
  src: '../public/assets/fonts/NeufileGrotesk-Regular.woff2',
});

const App = ({ Component, pageProps }) => {
  return (
    <main className={neufileGrotesk.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
