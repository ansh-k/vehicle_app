import * as React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import IVehicleProps from '../interfaces/vehicleProps';

const VehicleComponent = (props: IVehicleProps) => {
  return (
    <div className='center'>
      <h2> Makes of Vehicle </h2>
      <ReactTable
        data={props.makes}
        columns={[
          {
            Cell: ({row}) => {
              return (
                <div>
                  <a href={`/make/${row._original.Make_ID}/model`}>
                    {row._original.Make_ID}
                  </a>
                </div>
              );
            },
            Header: "ID",
            id: "link",
          },
          {
            Header: "Name",
            accessor: "Make_Name",
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
}

export default VehicleComponent