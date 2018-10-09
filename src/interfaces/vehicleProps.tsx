import IMake from './make';

export default interface IVehicleProps {
  allMakes: () => object;
  loaded: boolean;
  makes: IMake[];
}