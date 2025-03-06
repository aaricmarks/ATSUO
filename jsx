// pages/_app.js
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
