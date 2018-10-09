import IMake from './make';
import IModel from './model';

export default interface IState {
  vehicle: {
    loaded: boolean,
    makes: IMake[],
    models: IModel[],
  };
}