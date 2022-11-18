import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";



function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport
        printOptions={{
          hideFooter: true,
          hideToolbar: true,
        }}
      />
    </GridToolbarContainer>
  );
}

export default function TestComponent(patients={patients}) {
  // const { data, loading } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 4,
  //   maxColumns: 6,
  // });

  const columns = [
    { field: 'id', headerName: 'ID NO.', width: 90 },
    {
      field: 'patient_name',
      headerName: 'Patient Name',
      width: 150,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Date',
      type: 'date',
      width: 110,
      editable: true,
    },
    {
      field: 'department',
      headerName: 'Department Visited',
      width: 150,
      editable: true,
    }, 
    {
      field: 'method_of_payment',
      headerName: 'Method of Payment',
      width: 150,
      editable: true,
    }, 
     {
      field: 'amount_paid',
      headerName: 'Amount Paid',
      type:'currency',
      width: 150,
      editable: true,
    }
  ];
  // console.log(patients.patients);
  const rows =patients.patients
 

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        // {...data}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        editMode="false"
        disableSelectionOnClick
        // loading={loading}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
