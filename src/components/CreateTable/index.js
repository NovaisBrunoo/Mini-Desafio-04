import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import iconeLixo from '../../assets/Icon-Trash.svg'
import iconeEdite from '../../assets/Icon-Pencil.png'
import api from '../../api/api'
import { getItem } from '../../utils/storage'


export default function BasicTable() {
  const [registrousuario, setRegistroUsuario] = React.useState([]);

  React.useEffect(() => {
    try {
      async function TableTitle() {
        const response = await api.get('/contatos',
          {
            headers: {
              Authorization: `Bearer ${getItem('token')}`
            }
          }
        )
        console.log(response.data)
      }
      TableTitle()
      console.log(registrousuario)
    }
    catch (error) {

    }

  }, [])
  function createData(name, email, telefone) {
    return { name, email, telefone };
  }

  const rows = [

  ];



  return (
    <Table sx={{ width: 950, height: 386 }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: '#F4F0F0' }} >
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Telefone</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" >
              {row.name}
            </TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.telefone}</TableCell>
            <TableCell><img style={{ marginRight: '15px' }} src={iconeEdite} alt='icone de editar' /> <img src={iconeLixo} alt='icone lixeira' /> </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
