import {create} from 'apisauce';
import IAction from '../interfaces/action';

const api = create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchAllMakes = async () => {
  const response = await api.get('/vehicles/all_makes');
  return response;
}

export const fetchAllModalsByMake = async (action: IAction) => {
  const response = await api.get(`/vehicles/${action.id}/get_models_for_make`);
  return response;
}

export const fetchAllModalsByMakeYear = async (action: IAction) => {
  const response = await api.get(`/vehicles/${action.id}/get_models_for_make_year/${action.year}`);
  return response;
}
