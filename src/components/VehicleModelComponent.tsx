import * as React from 'react';
import * as Loader from 'react-loader';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import IVehicleModelProps from '../interfaces/vehicleModelProps';

const VehicleModelComponent = (props: IVehicleModelProps) => {
  return (
    <div className='center'>
      <h2> Models of Make </h2>
      <select
        onChange={props.onChange} >
        {props.options.map((option: string) => {
          return <option value={option} key={option} >{option}</option>
        })}
      </select>
      <Loader loaded={props.loaded} className="spinner">
        <ReactTable
          data={props.models[props.match.params.id]}
          columns={[
            {
              Header: "ID",
              accessor: "Model_ID",
            },
            {
              Header: "Name",
              accessor: "Model_Name",
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </Loader>
    </div>
  );
}

export default VehicleModelComponent