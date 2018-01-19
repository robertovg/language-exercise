import React from 'react';
import PropTypes from 'prop-types';

const ExerciseHeader = ({ exercise }) => (
  <div className="exerciseHeader">
    <div className="exerciseHeader__instructions">
      <span role="img" aria-label="Info">
        ℹ️
      </span>
      Instructions
    </div>
    <div className="exerciseHeader__explanation">{exercise.explanation}</div>
    <div className="exerciseHeader__help">
      Help
      <span role="img" aria-label="Info">
        ？
      </span>
    </div>
  </div>
);
ExerciseHeader.propTypes = {
  exercise: PropTypes.object,
};
ExerciseHeader.defaultProps = {
  exercise: {},
};

export default ExerciseHeader;
