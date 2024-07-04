'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const formatDate = (value) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

const columns = [
  { id: 'nome', label: 'Nome', minWidth: 170 },
  { id: 'sobrenome', label: 'Sobrenome', minWidth: 100 },
  { id: 'email', label: 'E-mail', minWidth: 170, align: 'right' },
  { id: 'genero', label: 'Gênero', minWidth: 170, align: 'right' },
  { id: 'linguagem', label: 'Linguagem', minWidth: 170, align: 'right'},
  { id: 'avatar', label: 'Avatar', minWidth: 170, align: 'right'},
  { id: 'dataNascimento', label: 'Data de Nascimento', minWidth: 170, align: 'right', format: (value) => formatDate(value)},
  { id: 'acoes', label: 'Ações', minWidth: 170, align: 'right' }
];

export default function StickyHeadTable({ rows, onEdit, onDelete }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState('');
  const [deleteNome, setDeleteNome] = React.useState('');

  const openDeleteConfirmation = (id, nome) => {
    setDeleteId(id);
    setDeleteNome(nome);
    setConfirmDeleteOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteId('');
    setConfirmDeleteOpen(false);
  };

  const handleDelete = () => {
    onDelete(deleteId);
    closeDeleteConfirmation();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'acoes') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button onClick={() => onEdit(row)}>Editar</Button>
                            <Button onClick={() => openDeleteConfirmation(row._id, row.nome)}>Excluir</Button>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={confirmDeleteOpen} onClose={closeDeleteConfirmation}>
        <DialogTitle>Confirmação de Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza que deseja excluir este contato: <strong>{deleteNome}</strong>? 
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteConfirmation} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="primary">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}