import { useEffect } from 'react';
import LandingPage from '../src/LandingPage/LandingPage';
import About from '../src/About/About';
import Skills from '../src/Skills/Skills';
import '../styles/globals.css'

function App({ Component, pageProps}) {
  useEffect(() => {
    import('tw-elements')
  }, []);

  return <Component {...pageProps} />
}

export default App;
