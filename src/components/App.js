import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionsCreators';

import { User } from '../data/classes';
import Lessons from '../components/Lessons';
import Session from '../components/Session';

function mapStateToProps(state) {
  return {
    user: state.user,
    lessons: state.lessons,
    session: state.session,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}
class App extends PureComponent {
  render() {
    return (
      // ConnectedRouter will use the store from Provider automatically
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              const newProps = { ...props, ...this.props };
              return <Lessons {...newProps} />;
            }}
          />
          <Route
            exact
            path="/session/:lessonId"
            render={props => {
              const newProps = { ...props, ...this.props };
              return <Session {...newProps} />;
            }}
          />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/**
 * Type Validations
 */
App.propTypes = {
  history: PropTypes.object,
};

App.defaultProps = {
  history: {},
};
