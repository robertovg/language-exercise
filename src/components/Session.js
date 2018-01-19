import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { User } from '../data/classes';
import Loading from '../components/Loading';
import ShowError from '../components/ShowError';
import Exercises from '../components/Exercises';

import logo from '../logo.svg';

const SessionLoaded = props => {
  const { session } = props;
  const [exercisesPassed, exercisesFailed] = [
    Object.values(session.current.exerciseResults).filter(e => e).length,
    Object.values(session.current.exerciseResults).filter(e => !e).length,
  ];
  return (
    <section className="session">
      <header className="session__header">
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <p className="header__title">{session.current.lesson.name}</p>
        <div className="header__progress">
          <p>
            {`${session.current.exerciseProgress + 1} of ${
              session.current.lesson.exercises.length
            }`}
          </p>
        </div>
        <div className="header__actions">
          <div className="header__answer--ok">
            <span role="img" aria-label="passed">
              ✔
            </span>
            {exercisesPassed}
          </div>

          <div className="header__answer--bad">
            <span role="img" aria-label="failed">
              ✘
            </span>
            {exercisesFailed}
          </div>

          <div className="header__answer--bad">
            <Link to="/">
              <button className="little">X</button>
            </Link>
          </div>
        </div>
      </header>
      <Exercises sessionResult={[exercisesPassed, exercisesFailed]} {...props} />
    </section>
  );
};
/**
 * Type Validations
 */
SessionLoaded.propTypes = {
  session: PropTypes.object,
  actions: PropTypes.object,
};

SessionLoaded.defaultProps = {
  session: {},
  actions: {},
};

export default class Session extends PureComponent {
  componentWillMount() {
    const { lessons, user, match } = this.props;
    const { lessonId } = match.params;
    const { items = [] } = lessons;
    // I try to get the lesson from the previous lessonsId, if not, we just dispatch the lessonId
    const loadedLesson = items.find(e => e.id === lessonId);
    this.props.actions.createSession(user, loadedLesson || lessonId);
  }
  render() {
    const { session } = this.props;
    return !session.error ? (
      <main>{session.isLoaded ? <SessionLoaded {...this.props} /> : <Loading />}</main>
    ) : (
      <ShowError message={session.error} />
    );
  }
}
/**
 * Type Validations
 */
Session.propTypes = {
  user: PropTypes.object,
  session: PropTypes.object,
  lessons: PropTypes.object,
  actions: PropTypes.shape({
    createSession: PropTypes.func,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({ lessonId: PropTypes.string }),
  }),
};

Session.defaultProps = {
  user: new User(),
  session: {},
  lessons: {},
  actions: {
    createSession() {},
  },
  match: {
    params: {
      lessonId: 'lesson_10',
    },
  },
};
