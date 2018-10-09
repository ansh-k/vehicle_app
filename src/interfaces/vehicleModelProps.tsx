export default interface IVehicleModelProps {
  modelsByMake: (id: number) => object;
  modelsByMakeYear: (id: number, year: number) => object;
  match: {
    params: {
      id: number
    }
  };
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => any;
  options: string[];
  loaded: boolean;
  models: [];
}