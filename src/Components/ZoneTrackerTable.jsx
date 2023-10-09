import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "managedby", headerName: "Managed By", width: 150 },
  { field: "zone", headerName: "Zone", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "state", headerName: "State", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "actions", headerName: "Actions", width: 130 },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: 1,
    managedby: "Snow",
    zone: "Jon",
    address: 35,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 2,
    managedby: "Lannister",
    zone: "Cersei",
    address: 42,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 3,
    managedby: "Lannister",
    zone: "Jaime",
    address: 45,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 4,
    managedby: "Stark",
    zone: "Arya",
    age: 16,
    address: 68,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 5,
    managedby: "Targaryen",
    zone: "Daenerys",
    address: 268,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 6,
    managedby: "Melisandre",
    zone: "Priyanka",
    address: 150,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 7,
    managedby: "Clifford",
    zone: "Ferrara",
    address: 44,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 8,
    managedby: "Frances",
    zone: "Rossini",
    address: 36,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
  {
    id: 9,
    managedby: "Roxie",
    zone: "Harvey",
    address: 65,
    city: "New Delhi",
    state: "Delhi",
    status: "active",
    actions: "some actions",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
