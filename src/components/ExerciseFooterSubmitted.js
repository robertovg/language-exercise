import React from 'react';
import PropTypes from 'prop-types';

const ExerciseFooterSubmitted = ({
  exercise,
  exerciseResult,
  isSessionOver,
  isSessionPassed,
  lessonId,
  sessionResult,
  actions,
  history,
}) => (
  <div className={`exerciseFooter exerciseFooter--${exerciseResult ? 'ok' : 'fail'}`}>
    <div className="exerciseFooter__answers">&nbsp;</div>
    <div className="exerciseFooter__explanation">
      {exercise.solutionExplanation.map(e => (
        <div className="exerciseFooter__explanationLine" key={e.keyWord}>
          <button disabled className="exerciseFooter__explanationKey">
            {e.keyWord}
          </button>
          <p className="exerciseFooter__explanationKey">{e.explanation}</p>
        </div>
      ))}
    </div>
    {!isSessionOver ? (
      <div className="exerciseFooter__controls">
        <button
          className="exerciseFooter__next"
          onClick={() => actions.incrementExerciseProgress()}
        >
          Next Exercise
        </button>
      </div>
    ) : (
      <div
        className={`exerciseFooter__backToSession exerciseFooter__backToSession--${
          isSessionPassed ? 'ok' : 'fail'
        }`}
      >
        <h1>Lesson: {isSessionPassed ? 'passed' : 'failed'}</h1>
        <button
          className="exerciseFooter__next"
          onClick={() => {
            // We should not do 2 things here...
            actions.updateUserProgress(lessonId, sessionResult);
            history.push('/');
          }}
        >
          Back to Sessions
        </button>
      </div>
    )}
  </div>
);
ExerciseFooterSubmitted.propTypes = {
  exercise: PropTypes.object,
  exerciseResult: PropTypes.bool,
  isSessionOver: PropTypes.bool,
  isSessionPassed: PropTypes.bool,
  lessonId: PropTypes.string,
  sessionResult: PropTypes.array,
  actions: PropTypes.object,
  history: PropTypes.object,
};
ExerciseFooterSubmitted.defaultProps = {
  exercise: {},
  exerciseResult: false,
  isSessionOver: false,
  isSessionPassed: false,
  lessonId: '',
  sessionResult: [0, 0],
  actions: {},
  history: {},
};

export default ExerciseFooterSubmitted;
