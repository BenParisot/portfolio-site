import React from 'react';
import ben from '../assets/ben-parisot-styled.jpg';

export default function About() {
    return (
        <section className="about">
            <section className="about-left">
                <img src={ben} alt="Ben Parisot JavaScript Developer" />
                <section className="introduction">
                    <p>Hello! I'm Ben Parisot, a former technical producer turned software developer that likes to build bots, websites, and mobile apps.</p>
                </section>
            </section>
            <section className="about-right">
                <section className="tech">
                    <h4>Tech</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Jest/Q-Unit</li>
                        <li>MongoDB/Firebase/AWS</li>
                        <li>Travis</li>
                        <li>TDD/DDD</li>
                    </ul>
                </section>
                <section className="tools">
                    <h4>Tools</h4>
                    <ul>
                        <li>Netlify</li>
                        <li>Heroku</li>
                        <li>GitHub</li>
                        <li>Jira/Confluence</li>
                        <li>Gimp/Illustrator/InDesign</li>
                        <li>After Effects</li>
                        <li>TouchDesigner</li>
                        <li>MadMapper</li>
                    </ul>
                </section>
                <section className="about-button">
                    <button>View My Full Resume</button>
                </section>
            </section>
        </section>
    )
}
