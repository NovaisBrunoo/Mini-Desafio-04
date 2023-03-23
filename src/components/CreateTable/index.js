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
        const response = await api.get('/contato',
          {
            headers: {
              Authorization: `Bearer ${getItem('token')}`
            }
          }
        )
        setRegistroUsuario(response.data)
      }
      TableTitle()
    }
    catch (error) {

    }

  }, [])
  console.log(registrousuario)
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
        {registrousuario.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" >
              {row.nome}
            </TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.telefone}</TableCell>
            <TableCell><img style={{ marginRight: '15px', cursor: 'pointer' }} src={iconeEdite} alt='icone de editar' /> <img style={{ cursor: 'pointer' }} src={iconeLixo} alt='icone lixeira' /> </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
