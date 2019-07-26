import React from 'react';
import PropTypes from 'prop-types';

function Project({ title, image, description, demo, repo, color }) {

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
            <h4>{demo}   |   {repo}</h4>
        </section>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Project; 
