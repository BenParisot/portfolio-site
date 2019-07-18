import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
    return (
        <section>
            <p>Thanks for your message! I will get back to you shortly</p>
            <Link to="/">Return Home</Link>
        </section>
    )
}
