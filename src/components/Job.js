import React from 'react';
import PropTypes from 'prop-types';

function Job({ title, company, jobDescription, dates }) {
    return (
        <section className="job">
            <h4>Title: {title}</h4>
            <h4>Company: {company}</h4>
            <h4>Description: {jobDescription}</h4>
            <h4>Dates: {dates}</h4>
        </section>
    )
}

Job.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired
}

export default Job;
