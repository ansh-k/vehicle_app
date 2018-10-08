import { FETCH_ALL_MAKES, FETCH_MODELS_BY_MAKE } from '../types.js';

export function allMakes() {
  return {
    type: FETCH_ALL_MAKES,
  }
}

export function modelsByMake(id: number) {
  return {
    id,
    type: FETCH_MODELS_BY_MAKE
  }
}