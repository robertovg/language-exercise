import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LessonItemProgress = ({ progress, userLevel, lessonLevel }) =>
  progress ? (
    <div className="lessonItem__progress--pass">
      <span role="img" aria-label="passed">
        ✔
      </span>
      {progress}
    </div>
  ) : (
    <div className="lessonItem__progress--pending">
      {userLevel + 1 === lessonLevel ? (
        <span role="img" aria-label="Unlocked">
          🔓
        </span>
      ) : (
        <span role="img" aria-label="Locked">
          🔒
        </span>
      )}
    </div>
  );
LessonItemProgress.propTypes = {
  progress: PropTypes.string,
  userLevel: PropTypes.number,
  lessonLevel: PropTypes.number,
};
LessonItemProgress.defaultProps = {
  progress: '',
  userLevel: 0,
  lessonLevel: 0,
};

const LessonItem = ({ lesson, user }) => {
  const progress = user.levelResults[lesson.id];

  return user.level + 1 >= lesson.level ? (
    <div className="lessonItem lessonItem--electable">
      <Link to={`/session/${lesson.id}`}>
        <div className="lessonItem__title">{lesson.name}</div>
        <LessonItemProgress progress={progress} userLevel={user.level} lessonLevel={lesson.level} />
      </Link>
    </div>
  ) : (
    <div className="lessonItem">
      <div className="lessonItem__title">{lesson.name}</div>
      <LessonItemProgress progress={progress} userLevel={user.level} lessonLevel={lesson.level} />
    </div>
  );
};
LessonItem.propTypes = {
  lesson: PropTypes.object,
  user: PropTypes.object,
};
LessonItem.defaultProps = {
  lesson: {},
  user: {},
};

export default LessonItem;
