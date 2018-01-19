import { call, put, all, takeEvery } from 'redux-saga/effects';
import { Lesson, Exercise, Session, User } from '../data/classes';
import { getLessons, getLesson, getExercises } from '../data/dataFetcher';
import * as constants from '../data/constants';

let lessons;
function* fetchLessonsData({ type }) {
  try {
    // First time we are calling it, if lessons is not yet loaded
    if (!lessons) {
      const lessonsRaw = yield call(getLessons);
      lessons = lessonsRaw.map(lesson => new Lesson(lesson));
    }
    // Then we dispatch it
    yield put({
      type: `${type}_SUCCEEDED`,
      lessons,
    });
  } catch ({ message = 'Error fetching data' }) {
    // act on error
    console.error(message);
    yield put({ type: constants.exception, message });
  }
}

function* createSession(action) {
  try {
    const { user, lesson: lessonParam, type } = action;
    let lesson;
    let exerciseRaw;
    // If we have the lesson loaded, we just need to ask for the exercises
    if (lessonParam instanceof Lesson) {
      lesson = lessonParam;
      exerciseRaw = yield call(getExercises, lesson.id);
    } else {
      // Asking exercise repeating the code, because otherwise it would make request sequentially
      // better using `all` to make them
      const { exerciseRawSecond, lessonRaw } = yield all({
        exerciseRawSecond: call(getExercises, lessonParam),
        lessonRaw: call(getLesson, lessonParam),
      });
      lesson = new Lesson(lessonRaw);
      exerciseRaw = exerciseRawSecond;
    }
    // We fill the exercises for the lesson.
    lesson.exercises = exerciseRaw.map(e => new Exercise(e));

    const session = new Session({ user: new User(user), lesson: new Lesson(lesson) });
    // Then we dispatch it
    yield put({
      type: `${type}_SUCCEEDED`,
      session,
    });
  } catch ({ message = 'Error fetching data' }) {
    // act on error
    console.error(message);
    yield put({ type: constants.exception, message });
  }
}
// Our watcher Saga, a new task on each ACTION
export default function* watchGeneralData() {
  yield takeEvery(constants.fetchInit, fetchLessonsData);
  yield takeEvery(constants.createSession, createSession);
}
