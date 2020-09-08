import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png'
        alt='Netflix Logo'
      />

      <img
        className='nav__avatar'
        src='https://yt3.ggpht.com/a/AGF-l79IAzrtuWiVACWTNr_TxSm7oTQdMD4h9_Zmzg=s900-c-k-c0xffffffff-no-rj-mo'
        alt='Netflix Logo'
      />
    </div>
  );
}

export default Nav;
