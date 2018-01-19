import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import lessons from '../reducers/lessons';
import session from '../reducers/session';
import user from '../reducers/user';

const rootReducer = combineReducers({
  router: routerReducer,
  lessons,
  session,
  user,
});

export default rootReducer;
