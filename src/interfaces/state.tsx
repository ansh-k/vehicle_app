import IMake from './make';
import IModel from './model';

export default interface IState {
  vehicle: {
    makes: IMake[],
    models: IModel[],
  };
}