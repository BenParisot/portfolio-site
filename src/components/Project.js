import React from 'react';
import PropTypes from 'prop-types';

function Project({ title, image, description, uses, demo, demoLink, repo, repoLink, color }) {

    const styles = {
        background: color
    }
    return (
        <section className="project">
            <section style={styles} className="project-title">
                <h3>{title}</h3>
            </section>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>Built with {uses}</p>
            <h4><a target="blank" href={demoLink}>{demo}</a>   <span className="project-spacer">|</span>   <a target="blank" href={repoLink}>{repo}</a></h4>
        </section>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    uses: PropTypes.string.isRequired,
    demo: PropTypes.string,
    demoLink: PropTypes.string,
    repo: PropTypes.string,
    repoLink: PropTypes.string,
    color: PropTypes.string.isRequired
}

export default Project; 
