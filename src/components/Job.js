import React from 'react';
import PropTypes from 'prop-types';

function Job({ title, company, jobDescription, dates }) {
    return (
        <section className="job">
            <h4><span className="job-label">Title:</span> {title}</h4>
            <h4><span className="job-label">Company:</span> {company}</h4>
            <h4><span className="job-label">Description:</span> {jobDescription}</h4>
            <h4><span className="job-label">Dates:</span> {dates}</h4>
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
