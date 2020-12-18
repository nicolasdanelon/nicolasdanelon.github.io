import React, {  useState } from 'react';
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import './styles.sass';

const Header = () => {
  const [width, setWidth] = useState('0%');
  const toggleMenu = () => (width === '0%') ? setWidth('100%') : setWidth('0%');
  const subTitle = [
    'Fullstack developer', 'React native developer', 'php hardcore enterprise developer',
    'Linux lover', 'Open source evangelist', 'I\'ve used kafka once', 'I like docker', 'I\'m a retrogamer'
  ];

  return (
    <header>
      <h1>Nicolás Danelón</h1>
      <h2>
        <Typewriter
          options={{
            cursor: '█',
            strings: subTitle,
            deleteSpeed: 40,
            autoStart: true,
            loop: true,
          }}
         />
      </h2>
      <span className="btn-menu" onClick={() => toggleMenu()}>
        <FontAwesomeIcon icon={ faBars } />
      </span>
      {/* <a href="mailto:nomorespam@gmail.com"
         className="btn-contact">
        📧 Contact me!
        </a> */}
      <nav className="overlay" style={{ width }}>
        <span className="btn-close" onClick={() => toggleMenu()}>
          <FontAwesomeIcon icon={ faTimes } className="icon" color="#fff" />
        </span>
        <div className="overlay-content">
          <a href="https://twitter.com/nicolas_danelon" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://github.com/nicolasdanelon/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nicolasdanelon/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
