import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button sx={{ backgroundColor: '#04C45C', width: 235, '&:hover': { backgroundColor: '#04C45C' } }} variant="contained">Adiconar</Button>
        </Stack>
    );
}