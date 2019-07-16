import React from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import headerLogo from '../assets/Ben-Parisot-Logo2-WEB.png';

export default function Header() {
    return (
       <header>
        <Link to="/">
          <img id="home" style={{ height: '75px', margin: 'auto' }} src={headerLogo} alt="Ben Parisot Logo" />
        </Link>
        <nav>
            <a href="https://twitter.com/HereCodesNothin" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={twitter} alt="Twitter logo" /></a>
            <a href="https://www.linkedin.com/in/benparisot/" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={linkedin} alt="LinkedIn logo" /></a>
            <a href="https://github.com/benparisot" target="blank"><img style={{ width: '45px', height: '45px', margin: 'auto 7px' }} src={github} alt="Github logo" /></a>
            </nav>
       </header> 
    )
}
