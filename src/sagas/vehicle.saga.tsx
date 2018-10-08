import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ALL_MAKES, FETCH_ALL_MAKES_FAILED, FETCH_ALL_MAKES_SUCCEED,
          FETCH_MODELS_BY_MAKE, FETCH_MODELS_BY_MAKE_FAILED, FETCH_MODELS_BY_MAKE_SUCCEED,
          FETCH_MODELS_BY_MAKEYEAR, FETCH_MODELS_BY_MAKEYEAR_FAILED, FETCH_MODELS_BY_MAKEYEAR_SUCCEED
       } from '../types';

import { fetchAllMakes, fetchAllModalsByMake, fetchAllModalsByMakeYear } from '../apis/vehicle';
import IAction from '../interfaces/action';

function* fetchMakes (action: IAction) {
  const response = yield call(fetchAllMakes, action);
  if(response.ok) {
    yield put({type: FETCH_ALL_MAKES_SUCCEED, makes: response.data.Results});
  } else {
    yield put({type: FETCH_ALL_MAKES_FAILED, errors: response.errors});
  }
}

function* fetchModalsByMake (action: IAction) {
  const response = yield call(fetchAllModalsByMake, action);
  if(response.ok) {
    yield put({type: FETCH_MODELS_BY_MAKE_SUCCEED, models: response.data.Results, id: action.id});
  } else {
    yield put({type: FETCH_MODELS_BY_MAKE_FAILED, errors: response.errors});
  }
}

function* fetchModalsByMakeYear (action: IAction) {
  const response = yield call(fetchAllModalsByMakeYear, action);
  if(response.ok) {
    yield put({type: FETCH_MODELS_BY_MAKEYEAR_SUCCEED, models: response.data.Results, id: action.id});
  } else {
    yield put({type: FETCH_MODELS_BY_MAKEYEAR_FAILED, errors: response.errors});
  }
}

export const vehicleSaga = [
  takeLatest(FETCH_ALL_MAKES, fetchMakes),
  takeLatest(FETCH_MODELS_BY_MAKE, fetchModalsByMake),
  takeLatest(FETCH_MODELS_BY_MAKEYEAR, fetchModalsByMakeYear),
 ]