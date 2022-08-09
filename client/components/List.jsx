import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1, maxWidth: 40 },
  { field: 'title', headerName: 'Title', flex: 1, minWidth: 100 },
  { field: 'severity', headerName: 'Severity', flex: 1, minWidth: 100 },
  { field: 'status', headerName: 'Status', flex: 1, minWidth: 100 },
  {
    field: 'userSubmitted',
    headerName: 'User Submitted',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'engineerAssigned',
    headerName: 'Engineer Assigned',
    flex: 1,
    minWidth: 100,
  },
  { field: 'platform', headerName: 'Operating System', flex: 1, minWidth: 100 },
  { field: 'app', headerName: 'App', flex: 1, minWidth: 100 },
  { field: 'appVersion', headerName: 'Version', flex: 1, minWidth: 100 },
];

export default function List({ bugList, selectBug }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={bugList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        onRowClick={(rowData, rowState) => {
          console.log(rowData.row);
          selectBug(rowData.row);
    
        }}
      />
    </div>
  );
}
