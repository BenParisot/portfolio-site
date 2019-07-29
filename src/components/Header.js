import React from 'react';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import headerLogo from '../assets/Ben-Parisot-Logo2-WEB.png';
import icon from '../assets/icon.jpg';

export default function Header() {
    return (
       <header id="header" className="header">
                 <img className="logo-desktop" id="home" style={{ height: '75px', margin: 'auto' }} src={headerLogo} alt="Ben Parisot Logo" />
        <img className="logo-mobile" src={icon} alt="Ben Parisot Logo small" />
        <a href="#main-menu"
          id="main-menu-toggle"
          className="menu-toggle"
          aria-label="Open main menu">
            <span className="sr-only">Open main menu</span>
            <span className="fa fa-bars" aria-hidden="true"></span>
        </a>

        <nav id="main-menu" className="main-menu" aria-label="Main menu">
          <a href="#main-menu-toggle"
            id="main-menu-close"
            className="menu-close"
            aria-label="Close main menu">
              <span className="sr-only">Close main menu</span>
              <span className="fa fa-close" aria-hidden="true"></span>
          </a>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a target="blank" href="https://herecodesnothing.com/">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#main-menu-toggle"
          className="backdrop"
          tabIndex="-1"
          aria-hidden="true" hidden>.</a>
        <section className="social-links">
            <a href="https://twitter.com/HereCodesNothin" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={twitter} alt="Twitter logo" /></a>
            <a href="https://www.linkedin.com/in/benparisot/" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={linkedin} alt="LinkedIn logo" /></a>
            <a href="https://github.com/benparisot" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={github} alt="Github logo" /></a>
        </section>
       </header> 
    )
}
