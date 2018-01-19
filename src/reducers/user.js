import * as constants from '../data/constants';

function user(state = {}, action) {
  switch (action.type) {
    case constants.updateUserProgress:
      // if lesson was passed
      if (action.sessionResult[0] >= action.sessionResult[1]) {
        return {
          ...state,
          level: state.level + 1,
          levelResults: {
            ...state.levelResults,
            [action.lessonId]: `${action.sessionResult[0]}/${action.sessionResult.reduce(
              (a, b) => a + b
            )}`,
          },
        };
      }
      // If we don't pass the session, we don't save anything
      return state;
    default:
      return state;
  }
}

export default user;
