import React from 'react';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import headerLogo from '../assets/Ben-Parisot-Logo2-WEB.png';
import icon from '../assets/icon.jpg';

export default function Header() {
    return (
       <header className="header">
        <a href="/">
          <img className="logo-desktop" id="home" style={{ height: '75px', margin: 'auto' }} src={headerLogo} alt="Ben Parisot Logo" />
          <img className="logo-mobile" src={icon} alt="Ben Parisot Logo small" />
        </a>
        <nav className="menu">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a target="blank" href="https://herecodesnothing.com/">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </nav>
        <section className="social-links">
            <a href="https://twitter.com/HereCodesNothin" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={twitter} alt="Twitter logo" /></a>
            <a href="https://www.linkedin.com/in/benparisot/" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={linkedin} alt="LinkedIn logo" /></a>
            <a href="https://github.com/benparisot" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={github} alt="Github logo" /></a>
        </section>
       </header> 
    )
}
