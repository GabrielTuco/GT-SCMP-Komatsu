import React, { useState } from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const TabOS = ({ motivos = [] }) => {

    const [unplained, setUnplained] = useState('');
    const [plained, setPlained] = useState('');

    const unplanned = motivos.filter(e => e.tipo == true)
    const planned = motivos.filter(e => e.tipo != true)

    return (
        <Stack gap={2}>
            <Typography fontWeight={'bold'} textAlign={'left'}>UNPLAINED DOWNTIME</Typography>
            <Stack flexDirection={'row'} gap={2}>
                <FormControl fullWidth size='small'>
                    <InputLabel>Seleccione una opcion</InputLabel>
                    <Select
                        value={unplained}
                        label="Seleccione una opcion"
                        onChange={({ target }) => { setUnplained(target.value) }}
                    >
                        {
                            unplanned.map(e => (
                                <MenuItem value={e.cod_mot_par}>{e.descripcion}</MenuItem>))
                        }

                    </Select>
                </FormControl>
                <Button sx={{ justifySelf: 'flex-end' }} variant='contained' >STOP</Button>
            </Stack>
            <Typography fontWeight={'bold'} textAlign={'left'}>PLAINED DOWNTIME</Typography>
            <Stack flexDirection={'row'} gap={2}>
                <FormControl fullWidth size='small'>
                    <InputLabel>Seleccione una opcion</InputLabel>
                    <Select
                        value={plained}
                        label="Seleccione una opcion"
                        onChange={({ target }) => { setPlained(target.value) }}
                    >
                        {
                            planned.map(e => (
                                <MenuItem value={e.cod_mot_par}>{e.descripcion}</MenuItem>))
                        }

                    </Select>
                </FormControl>
                <Button sx={{ justifySelf: 'flex-end' }} variant='contained' >STOP</Button>
            </Stack>
            <Button sx={{ justifySelf: 'flex-end' }} variant='contained' >Finalizar</Button>
            <Button sx={{ justifySelf: 'flex-end' }} variant='contained' >Reprogramación</Button>
        </Stack>
    )
}
