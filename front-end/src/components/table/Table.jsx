import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

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

export default function Table({ patients }) {
  // const { data, loading } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 4,
  //   maxColumns: 6,
  // });

  const columns = [
    { field: "id", headerName: "ID NO.", width: 90 },
    {
      field: "patient_name",
      headerName: "Patient Name",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      width: 110,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department Visited",
      width: 150,
      editable: true,
    },
    {
      field: "method_of_payment",
      headerName: "Method of Payment",
      width: 150,
      editable: true,
    },
    {
      field: "amount_paid",
      headerName: "Amount Paid",
      type: "currency",
      width: 150,
      editable: true,
    },
  ];
  // console.log(patients);
  const rows = patients;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        // {...data}
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
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
