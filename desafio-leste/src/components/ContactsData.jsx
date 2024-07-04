import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

const ContactsGrid = ({ rows, onEdit, onDelete }) => {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.2,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'avatar',
      headerName: '',
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => {
        return <img src={params.value} className='rounded-full bg-black' />;
      },
      cellClassName: 'avatar-column',
    },
    {
      field: 'firstName',
      headerName: 'Nome',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'lastName',
      headerName: 'Sobrenome',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'gender',
      headerName: 'Gênero',
      flex: 0.6,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'language',
      headerName: 'Idioma',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'birthday',
      headerName: 'Data de Nascimento',
      flex: 0.9,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      flex: 0.6,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => (
        <div className='flex flex-col lg:block'>
          <IconButton onClick={() => onEdit(params.row)}>
            <Edit className='text-font-first text-sm sm:text-2xl' />
          </IconButton>
          <IconButton onClick={() => onDelete(params.row)}>
            <Delete className='text-red-700 text-sm sm:text-2xl' />
          </IconButton>
        </div>
      ),
    },
  ];

  const columnVisibilityModel = {
    avatar: !isSmallScreen,
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowHeight={70}
      columnVisibilityModel={columnVisibilityModel}
      className='text-xs sm:text-base'
    />
  );
};

export default ContactsGrid;
