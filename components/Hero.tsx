import React from 'react';
import SplitText from './SplitText';

const Hero = () => {
  const headerContainer = 'headerContainer flex flex-row-reverse justify-end';
  const headerStyling =
    'headerStyling inline-block text-4xl sm:text-6xl lg:text-8xl font-black transition duration-500 ease-out';

  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <span className="logo -z-10 mb-10 h-40 w-40" />
      <div>
        <h1 className="flex flex-col-reverse">
          <SplitText
            textComponent="Scott&nbsp;Duller"
            textStyling={headerContainer}
            letterStyling={headerStyling}
            reverse
          />
        </h1>
      </div>
      <div className="mb-4"></div>
      <p className="z-[-1] ml-1 opacity-50">
        Full-Stack Web Developer and Tinkerer
      </p>
      <div className="mb-10"></div>
      <a href="contact">
        <button className="ctaBtn">Get in Contact!</button>
      </a>
    </section>
  );
};

export default Hero;
