import React from 'react';
import PropTypes from 'prop-types';

function Hr({ color }) {
    console.log(color);
    const styles = {
        background: color,
        height: '.625rem'
    }
    return <hr style={styles} />
}

Hr.propTypes = {
    color: PropTypes.string.isRequired
}

export default Hr;
