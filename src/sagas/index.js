import { all } from 'redux-saga/effects';

import watchGeneralData from '../sagas/generalData';

export default function* rootSaga() {
  yield all([watchGeneralData()]);
}
