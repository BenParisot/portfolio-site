import React from 'react';
import Project from './Project';
import robot from '../assets/robot.png';
import track2020 from '../assets/track2020.jpg';
import pokemon from '../assets/pokemon.jpg';
import meganap from '../assets/meganap.jpg';

export default function Projects() {
    return (
            <section className="projects-container">
                <h2>Recent Projects:</h2>
                <section id="projects" className="projects">
                    <Project title="Mega Nap" image={meganap} description="A web app that lets front end developers generate API endpoints from any data set." demo="Live Demo" demoLink="https://www.meganap.com/" repo="Github Repo" repoLink="https://github.com/grandpapi" color="#ed4b64" />
                    <Project title="Robot Haikubot" image={robot} description="A Twitter bot that sends a randomly-generated haiku to those that ask for one." demo="Twitter Account" demoLink="https://twitter.com/RobotHaikubot" repo="Github Repo" repoLink="https://github.com/team-haikubot" color="#f26639" />
                    <Project title="Track 2020" image={track2020} description="An app to help people track their favorite candidates during the 2020 democratic primary." demo="In Development" repo="Github Repo" repoLink="https://github.com/track-2020" color="#f04d4d" />
                    <Project title="Pokematch" image={pokemon} description="A Pokemon matching game to teach kids numbers and pattern recognition." demo="In Development" repo="Github Repo" color="#ed4b64" />
                </section>
                <section className="github-cta">
                    <a target="blank" href="https://github.com/benparisot"><button className="github-cta-button">View more of my code on GitHub</button></a>
                </section>
            </section>
    )
}
