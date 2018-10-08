import IAction from '../interfaces/action';
import {
  FETCH_ALL_MAKES_SUCCEED
} from '../types';

const initialState = {
  makes: []
}

export default function(state = initialState, action: IAction) {
  switch(action.type) {
    case FETCH_ALL_MAKES_SUCCEED:
      return {
        ...state,
        makes: action.makes
      }
    default:
      return state;
  }
}