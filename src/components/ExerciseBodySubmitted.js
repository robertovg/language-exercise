import React from 'react';
import PropTypes from 'prop-types';
import { toBeFilledWildcard } from '../data/constants';

const ExerciseBodySubmitted = ({ exercise, exerciseResult }) => {
  const sentence = exercise.sentence.split(toBeFilledWildcard);
  const selectedOption = exercise.options.find(e => e.selected);
  const okOption = exercise.options.find(e => e.ok);
  const selection = selectedOption ? selectedOption.label : okOption.label;
  return (
    <div className="exerciseBody">
      <div className="exerciseBody__ask">&nbsp;</div>
      <img className="exerciseBody__image" src={exercise.image} alt={exercise.imageCaption} />
      {exerciseResult ? (
        <div className="exerciseBody__result exerciseBody__result--ok">
          <span role="img" aria-label="result--ok">
            👍
          </span>
        </div>
      ) : (
        <div className="exerciseBody__result exerciseBody__result--fail">
          <span role="img" aria-label="result--fail">
            👎
          </span>
        </div>
      )}
      <div
        className={`exerciseBody__answer exerciseBody__answer--${exerciseResult ? 'ok' : 'fail'}`}
      >
        {sentence[0] && <span className="exerciseBody__firstPart">{sentence[0]}</span>}
        <span className="exerciseBody__selection">{selection}</span>
        {sentence[1] && <span className="exerciseBody__secondPart">{sentence[1]}</span>}
      </div>
    </div>
  );
};
ExerciseBodySubmitted.propTypes = {
  exercise: PropTypes.object,
  exerciseResult: PropTypes.bool,
};
ExerciseBodySubmitted.defaultProps = {
  exercise: {},
  exerciseResult: false,
};

export default ExerciseBodySubmitted;
