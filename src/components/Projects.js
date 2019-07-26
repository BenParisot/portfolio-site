import React from 'react';
import Project from './Project';
import robot from '../assets/robot.png';
import track2020 from '../assets/track2020.jpg';
import pokemon from '../assets/pokemon.jpg';
import meganap from '../assets/meganap.jpg';

export default function Projects() {
    return (
            <section id="projects" className="projects">
                <h2>Recent Projects:</h2>
                <Project title="Mega Nap" image={meganap} description="A web app that lets front end developers generate API endpoints from any data set." demo="Live Demo" repo="Github Repo" color="#ed4b64" />
                <Project title="Robot Haikut" image={robot} description="A Twitter bot that sends a randomly-generated haiku to those that ask for one." demo="Twitter Account" repo="Github Repo" color="#f26639" />
                <Project title="Track 2020" image={track2020} description="An app to help people track their favorite candidates during the 2020 democratic primary." demo="Live Demo" repo="Github Repo"color="#f04d4d" />
                <Project title="Pokematch" image={pokemon} description="A Pokemon matching game to teach kids numbers and pattern recognition." demo="Live Demo" repo="Github Repo" color="#ed4b64" />
                <section className="github-cta">View more of my code on GitHub.</section>
            </section>
    )
}
