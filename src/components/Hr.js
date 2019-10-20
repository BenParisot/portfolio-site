import React from 'react';
import PropTypes from 'prop-types';

function Hr({ color, id }) {
    const styles = {
        background: color,
        height: '.625rem',
        border: 'none'
    }
    return <hr id={id} style={styles} />
}

Hr.propTypes = {
    color: PropTypes.string.isRequired,
    id: PropTypes.string
}

export default Hr;
