import { all } from 'redux-saga/effects';
import { vehicleSaga } from './vehicle.saga';

export default function* rootSaga() {
  yield all([
    ...vehicleSaga,
  ]);
}