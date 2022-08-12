import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { randomCreatedDate } from '@mui/x-data-grid-generator';

const columns = [
  { 
    field: 'id', 
    width: 10,
    headerName: 'ID', 
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 70,
    editable: true,
  },
  {
    field: 'regileDeDeclaration',
    headerName: 'Régile de déclaration',
    width: 155,
    editable: true,
  },
  {
    field: 'bureauDeDedouanement',
    headerName: 'Bureau de dédouanement',
    width: 185,
    editable: true,
  },
  {
    field: 'referenceDUM',
    headerName: 'Référence DUM',
    width: 155,
    editable: true,
  },
  {
    field: 'dateDeCreation',
    headerName: 'Date de création',
    type: 'date',
    width: 155,
    editable: true,
  },
  {
    field: 'statut',
    headerName: 'Statut',
    width: 100,
    editable: true,
  },
  {
    field: 'operation',
    headerName: 'Operation',
    width: 120,
    editable: true,
  },
];

const rows = [
  { id: 1, type: 'A', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 1', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 2, type: 'A', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 1', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 3, type: 'A', regileDeDeclaration: 'micro-BNC', bureauDeDedouanement: 'Bureau 2', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 4, type: 'A', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 4', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 5, type: 'A', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 6, type: 'D', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 7, type: 'D', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 8, type: 'B', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 9, type: 'B', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 10,type: 'B', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 11,type: 'B', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 12,type: 'B', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 13,type: 'A', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 14,type: 'A', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 3', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 15,type: 'B', regileDeDeclaration: 'BNC', bureauDeDedouanement: 'Bureau 2', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 16,type: 'A', regileDeDeclaration: 'micro-BNC', bureauDeDedouanement: 'Bureau 4', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 17,type: 'C', regileDeDeclaration: 'micro-BNC', bureauDeDedouanement: 'Bureau 1', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
  { id: 18,type: 'C', regileDeDeclaration: 'micro-BNC', bureauDeDedouanement: 'Bureau 1', referenceDUM: '1A-', dateDeCreation: randomCreatedDate(), statut: 'Done', operation: 'Op'},
];

export default function MyDataGrid() {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={18}
        rowsPerPageOptions={[18]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
