import IAction from '../interfaces/action';
import {
  FETCH_ALL_MAKES_SUCCEED,
  FETCH_MODELS_BY_MAKE_SUCCEED,
  FETCH_MODELS_BY_MAKEYEAR_SUCCEED
} from '../types';

const initialState = {
  makes: [],
  models: []
}

export default function(state = initialState, action: IAction) {
  switch(action.type) {
    case FETCH_ALL_MAKES_SUCCEED:
      return {
        ...state,
        makes: action.makes
      }
    case FETCH_MODELS_BY_MAKE_SUCCEED:
    case FETCH_MODELS_BY_MAKEYEAR_SUCCEED:
      return {
        ...state,
        models:{
          ...state.models,
          [action.id as number]: action.models
        }
      }
    default:
      return state;
  }
}