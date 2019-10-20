import React from 'react';
import { IoIosHeart } from 'react-icons/io';

export default function Footer() {
    return (
        <footer>
                <p>Designed and built by Ben Parisot in 2019</p>
                <IoIosHeart 
                    size="24px"
                    color="#f0ea49" 
                    style={{ margin: '0px 16px' }}
                />
                <p><a href="#top">Back to the Top</a></p>
            </footer>

    )
}
