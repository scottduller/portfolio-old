import React, { useEffect, useState } from 'react';
import Header from './Header';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config'; // Fix the path

const fullConfig = resolveConfig(tailwindConfig);

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const listenScrollEvent = (e) => {
    const md = +fullConfig.theme.screens.md.slice(
      0,
      fullConfig.theme.screens.md.indexOf('px')
    );

    if (document.documentElement.clientWidth > md) {
      setVisible(window.scrollY > document.documentElement.clientHeight * 0.2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <Header visible={visible} />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
