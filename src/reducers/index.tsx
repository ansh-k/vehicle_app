import {combineReducers} from 'redux';
import vehicleReducer from './vehicle.reducer';

export default combineReducers({
  vehicle: vehicleReducer,
});