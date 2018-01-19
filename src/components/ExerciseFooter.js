import React from 'react';
import PropTypes from 'prop-types';

const ExerciseFooter = ({ exercise, actions }) => (
  <div className="exerciseFooter exerciseFooter--pending">
    <div className="exerciseFooter__answers">
      <span role="img" aria-label="answers">
        ↩️
      </span>
      Answer
    </div>
    <div className="exerciseFooter__options">
      {exercise.options.map(e => (
        <button
          key={e.label}
          className="exerciseFooter__option"
          disabled={e.selected}
          onClick={() => actions.exerciseOptionSelected(e)}
        >
          {e.label}
        </button>
      ))}
    </div>

    <div className="exerciseFooter__controls">
      <button className="exerciseFooter__skip" onClick={() => actions.exerciseSubmitted(true)}>
        Skip
      </button>
      <button
        disabled={!exercise.options.find(e => e.selected)}
        className="exerciseFooter__submit"
        onClick={() => actions.exerciseSubmitted()}
      >
        Submit answer
      </button>
    </div>
  </div>
);
ExerciseFooter.propTypes = {
  exercise: PropTypes.object,
  actions: PropTypes.object,
};
ExerciseFooter.defaultProps = {
  exercise: {},
  actions: {},
};

export default ExerciseFooter;
