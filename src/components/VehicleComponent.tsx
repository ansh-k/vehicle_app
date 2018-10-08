import * as React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

const VehicleComponent = (props: any) => {
  return (
    <ReactTable
      data={props.makes}
      columns={[
        {
          Header: "ID",
          accessor: "Make_ID",
        },
        {
          Header: "Name",
          accessor: "Make_Name",
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  );
}

export default VehicleComponent