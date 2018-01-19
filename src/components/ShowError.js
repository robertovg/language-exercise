import React from 'react';
import PropTypes from 'prop-types';

const ShowError = ({ message }) => (
  <div className="error">
    <h1>We are experiencing some issues</h1>
    <p>{message}</p>
  </div>
);
ShowError.propTypes = {
  message: PropTypes.string,
};
ShowError.defaultProps = {
  message: '',
};

export default ShowError;
