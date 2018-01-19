import React from 'react';
import PropTypes from 'prop-types';

const ExerciseHeader = ({ exercise, exerciseResult }) => (
  <div className="exerciseHeader">
    <div className="exerciseHeader__instructions">&nbsp;</div>
    <div className="exerciseHeader__explanation">
      {exerciseResult ? (
        <div className="exerciseHeader__submission--ok">{exercise.okMessage}</div>
      ) : (
        <div className="exerciseHeader__submission--fail">{exercise.failMessage}</div>
      )}
    </div>
    <div className="exerciseHeader__help">&nbsp;</div>
  </div>
);
ExerciseHeader.propTypes = {
  exercise: PropTypes.object,
  exerciseResult: PropTypes.bool,
};
ExerciseHeader.defaultProps = {
  exercise: {},
  exerciseResult: false,
};

export default ExerciseHeader;
