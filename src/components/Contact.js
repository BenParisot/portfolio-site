import React from 'react';

export default function Contact() {
    return (
        <section className="contact">
            <h2>Contact Me:</h2>
            <section className="contact-row">
                <section className="contact-info">
                    <p><span className="contact-method">Phone:</span> <a href="tel:15037193537">503-719-3537</a></p>
                    <p><span className="contact-method">Email:</span> <a href="mailto:me@benparisot.com">me@benparisot.com</a></p>
                    <p><span className="contact-method">Twitter:</span> <a href="https://twitter.com/HereCodesNothin" target="blank">@herecodesnothin</a></p>
                    <p><span className="contact-method">LinkedIn:</span> <a href="https://www.linkedin.com/in/benparisot/" target="blank">/benparisot</a></p>
                    <p><span className="contact-method">GitHub:</span> <a href="https://github.com/benparisot" target="blank">/benparisot</a></p>
                </section>
                <form name="contact" method="POST" data-netlify="true">
                    <input type="text" name="name" defaultValue="Your Name" />
                    <input type="text" name="email" defaultValue="Your Email" />
                    <textarea name="message" defaultValue="Your Message" />
                    <button type="submit">Submit Message</button>
                </form>
            </section>
        </section>
    )
}
