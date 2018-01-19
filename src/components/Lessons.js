import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.svg';

import LessonItem from '../components/LessonItem';
import Loading from '../components/Loading';
import ShowError from '../components/ShowError';

export default class Lessons extends PureComponent {
  componentWillMount() {
    this.props.actions.fetchInit();
  }
  render() {
    const { lessons } = this.props;
    return !lessons.error ? (
      <main className="lessons">
        <header className="header">
          <img src={logo} className="header__logo" alt="logo" />
          <h1 className="header__title">Welcome to "Language Exercise"</h1>
        </header>
        <section className="actionTitle">
          <p className="main__intro">To get started, please select your next Lessons.</p>
        </section>
        {lessons.isLoaded ? (
          <section className="lessonGrid">
            {lessons.items
              .sort((a, b) => (a > b ? 1 : -1))
              .map(lessonItem => (
                <LessonItem lesson={lessonItem} user={this.props.user} key={lessonItem.id} />
              ))}
          </section>
        ) : (
          <Loading />
        )}
      </main>
    ) : (
      <ShowError message={lessons.error} />
    );
  }
}

/**
 * Type Validations
 */
Lessons.propTypes = {
  lessons: PropTypes.object,
  user: PropTypes.object,
  actions: PropTypes.shape({
    fetchInit: PropTypes.func,
  }),
};

Lessons.defaultProps = {
  lessons: {},
  user: {},
  actions: {
    fetchInit() {},
  },
};
