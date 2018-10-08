import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ALL_MAKES, FETCH_ALL_MAKES_FAILED, FETCH_ALL_MAKES_SUCCEED } from '../types';

import { fetchAllMakes } from '../apis/vehicle';
import IAction from '../interfaces/action';

function* fetchMakes (action: IAction) {
  const response = yield call(fetchAllMakes, action);
  if(response.ok) {
    yield put({type: FETCH_ALL_MAKES_SUCCEED, makes: response.data.Results});
  } else {
    yield put({type: FETCH_ALL_MAKES_FAILED, errors: response.errors});
  }
}

export const vehicleSaga = [
  takeLatest(FETCH_ALL_MAKES, fetchMakes)
 ]