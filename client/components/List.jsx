import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1, maxWidth: 40 },
  { field: 'Bug Title', headerName: 'Title', flex: 1, minWidth: 100 },
  { field: 'Stage', headerName: 'Stage', flex: 1, minWidth: 100 },
  { field: 'Status', headerName: 'Status', flex: 1, minWidth: 100 },
  {
    field: 'Submitted By',
    headerName: 'Submitted by',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'Assigned To',
    headerName: 'Engineer Assigned',
    flex: 1,
    minWidth: 100,
  },
  { field: 'Application', headerName: 'App', flex: 1, minWidth: 100 },
  { field: 'Version', headerName: 'Version', flex: 1, minWidth: 100 },
];

export default function List({ bugList, selectBug, getNotes }) {
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
          fetch(`/bugs/${rowData.row.id}`).then(res => res.json())
            .then(noteData => {
              console.log(noteData.eNotes);
              getNotes(noteData.eNotes)
            });
        }}
      />
    </div>
  );
}
