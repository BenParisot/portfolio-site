import React from 'react';
import Project from './Project';
import robot from '../assets/robot.png';
import news from '../assets/news.jpg';
import giphy from '../assets/giphy.jpg';
import meganap from '../assets/meganap.jpg';

export default function Projects() {
    return (
            <section className="projects-container">
                <h2>Recent Projects:</h2>
                <section className="projects">
                    <Project title="Mega Nap" image={meganap} description="A full-stack web app that allows front end developers to input data and generate RESTful API endpoints." uses="Node.js, React/Redux, StyledComponents, MongoDB, Heroku, Netlify" demo="Live Demo" demoLink="https://www.meganap.com/" repo="Github Repo" repoLink="https://github.com/grandpapi" color="#ed4b64" />
                    <Project title="Robot Haikubot" image={robot} description="A Twitter bot that sends a randomly-generated haiku to those that ask for one." uses="Node.js, Express, MongoDB, Heroku" demo="Twitter Account" demoLink="https://twitter.com/RobotHaikubot" repo="Github Repo" repoLink="https://github.com/team-haikubot" color="#f26639" />
                    <Project title="The News!" image={news} description="A news search website that retrieves news articles relevant to a user’s search from NewsAPI.org and paginates the results." uses="Vanilla JavaScript, HTML, CSS, Netlify" demo="Live Demo" demoLink="https://parisot-news-search.netlify.com" repo="Github Repo" repoLink="https://github.com/BenParisot/search-page-api" color="#f04d4d" />
                    <Project title="Talk Giphy to Me" image={giphy} description="A gif translation and guessing game that lets players save their favorite gifs to individual and shared database collections." uses="Vanilla JavaScript, HTML, CSS, Firebase, Netlify" demo="Live Demo" demoLink="https://talkgiphytome.netlify.com/" repo="Github Repo" repoLink="https://github.com/team-dancing-pug/talk-giphy" color="#ed4b64" />
                </section>
                <section className="github-cta">
                    <a target="blank" href="https://github.com/benparisot"><button className="github-cta-button">View more of my code on GitHub</button></a>
                </section>
            </section>
    )
}
