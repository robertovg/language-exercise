import React from 'react';
import PropTypes from 'prop-types';
import { toBeFilledWildcard } from '../data/constants';

const ExerciseBody = ({ exercise }) => {
  const sentence = exercise.sentence.split(toBeFilledWildcard);
  const selectedOption = exercise.options.find(e => e.selected);
  const selection = selectedOption ? selectedOption.label : '_';
  return (
    <div className="exerciseBody">
      <div className="exerciseBody__ask">
        <span role="img" aria-label="Ask">
          🗣
        </span>
        Ask
      </div>
      <img className="exerciseBody__image" src={exercise.image} alt={exercise.imageCaption} />
      <div className="exerciseBody__answer">
        {sentence[0] && <span className="exerciseBody__firstPart">{sentence[0]}</span>}
        <span className="exerciseBody__selection">{selection}</span>
        {sentence[1] && <span className="exerciseBody__secondPart">{sentence[1]}</span>}
      </div>
    </div>
  );
};
ExerciseBody.propTypes = {
  exercise: PropTypes.object,
};
ExerciseBody.defaultProps = {
  exercise: {},
};

export default ExerciseBody;
