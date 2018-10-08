import IMake from './make';

export default interface IState {
  vehicle: {
    makes: IMake[]
  };
}