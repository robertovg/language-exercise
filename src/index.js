import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import reducers from './reducers';
import rootSaga from './sagas';

import './index.css';
import { User } from './data/classes';

// middleware creation
const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

// Creating enhancers to connect our middlewares (saga and router)
// and adding devtools in elegant way
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, middleware));

const store = createStore(
  reducers,
  {
    lessons: {},
    session: {},
    // Right now User is hardcoded, with level1 and a 5 and 7 of 8 results respectively
    user: new User({
      id: 'userId',
      name: 'User Name',
      level: 2,
      levelResults: { lesson_1: '5/8', lesson_2: '7/8' },
    }),
  },
  enhancer
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} context={this.context} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
