import React from 'react';
import style from "./Header.module.css";

import hamburger from '../../assets/images/hamburger.png'

import aboutStyle from '../about/About.module.css';
import contactStyle from '../contact/Contact.module.css';
import heroStyle from '../hero/Hero.module.css';

const Header = () => {
  console.log( style );
  return (
    <header>
      <nav className="container">
        <a href="#hero" className={style[ 'nav-logo' ]}>
          <img src="/logo.png" alt="" />
        </a>
        <ul className={style[ "nav-list" ]}>
          <li className={style[ "nav-item" ]}><a href={`#${heroStyle.hero}`} className={style[ "nav-link" ]}>Home</a></li>
          <li className={style[ "nav-item" ]}><a href={`#${aboutStyle.about}`} className={style[ "nav-link" ]}>About</a></li>
          <li className={style[ "nav-item" ]}><a href={`#${contactStyle.contact}`} className={style[ "nav-link" ]}>Contact</a></li>
          <li className={style[ "nav-item" ]}><button href="#home" className={style[ "nav-btn" ]}>Login</button></li>
          <li className={style[ "nav-item" ]}><button href="#home" className={style[ "nav-btn" ]}>Register</button></li>
        </ul>
        <button className={style.hamburger}>
          <img src={hamburger} alt="Hamburger" />
        </button>
      </nav>
    </header>
  )
}

export default Header