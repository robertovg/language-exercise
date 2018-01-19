import * as constants from '../data/constants';

export function fetchInit() {
  return {
    type: constants.fetchInit,
  };
}

export function createSession(user, lesson) {
  return {
    type: constants.createSession,
    user,
    lesson,
  };
}
export function exerciseOptionSelected(option) {
  return {
    type: constants.exerciseOptionSelected,
    option,
  };
}
export function exerciseSubmitted(failExercise) {
  return {
    type: constants.exerciseSubmitted,
    failExercise,
  };
}

export function incrementExerciseProgress() {
  return {
    type: constants.incrementExerciseProgress,
  };
}

export function updateUserProgress(lessonId, sessionResult) {
  return {
    type: constants.updateUserProgress,
    lessonId,
    sessionResult,
  };
}
