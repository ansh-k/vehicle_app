import IMake from './make';
import IModel from './model';

export default interface IAction {
  type: string;
  id?: number;
  makes?: IMake;
  models?: IModel[];
}