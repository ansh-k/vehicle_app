import * as React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

const VehicleModelComponent = (props: any) => {
  return (
    <div className='center'>
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
    </div>
  );
}

export default VehicleModelComponent