import React from 'react';
import PropTypes from 'prop-types';
import ExerciseHeader from '../components/ExerciseHeader';
import ExerciseBody from '../components/ExerciseBody';
import ExerciseFooter from '../components/ExerciseFooter';
import ExerciseHeaderSubmitted from '../components/ExerciseHeaderSubmitted';
import ExerciseBodySubmitted from '../components/ExerciseBodySubmitted';
import ExerciseFooterSubmitted from '../components/ExerciseFooterSubmitted';

const Exercises = ({ session, sessionResult, actions, history }) => {
  const [exercisesPassed, exercisesFailed] = sessionResult;
  const currentProgressExerciseId =
    session.current.lesson.exercises[session.current.exerciseProgress].id;
  const exerciseResult = session.current.exerciseResults[currentProgressExerciseId];
  const wasSubmitted = exerciseResult !== undefined;
  const isSessionOver =
    session.current.exerciseProgress + 1 === session.current.lesson.exercises.length;
  // Of course to determine if session passed we could have something more
  // sophisticated than just having more exercises passed than not. But it's fine like that.
  const isSessionPassed = isSessionOver && exercisesPassed >= exercisesFailed;
  return wasSubmitted ? (
    <div className="lesson">
      <ExerciseHeaderSubmitted
        exercise={session.current.lesson.exercises[session.current.exerciseProgress]}
        exerciseResult={exerciseResult}
      />
      <ExerciseBodySubmitted
        exercise={session.current.lesson.exercises[session.current.exerciseProgress]}
        exerciseResult={exerciseResult}
      />
      <ExerciseFooterSubmitted
        exercise={session.current.lesson.exercises[session.current.exerciseProgress]}
        exerciseResult={exerciseResult}
        isSessionOver={isSessionOver}
        isSessionPassed={isSessionPassed}
        lessonId={session.current.lesson.id}
        sessionResult={sessionResult}
        actions={actions}
        history={history}
      />
    </div>
  ) : (
    <div className="lesson">
      <ExerciseHeader
        exercise={session.current.lesson.exercises[session.current.exerciseProgress]}
      />
      <ExerciseBody exercise={session.current.lesson.exercises[session.current.exerciseProgress]} />
      <ExerciseFooter
        exercise={session.current.lesson.exercises[session.current.exerciseProgress]}
        actions={actions}
      />
    </div>
  );
};
Exercises.propTypes = {
  session: PropTypes.object,
  sessionResult: PropTypes.array,
  actions: PropTypes.object,
  history: PropTypes.object,
};
Exercises.defaultProps = {
  session: {},
  sessionResult: [0, 0],
  actions: {},
  history: {},
};

export default Exercises;
