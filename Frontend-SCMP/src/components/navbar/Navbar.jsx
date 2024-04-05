import { Box, Button, Drawer, List, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ItemNavbar } from './ItemNavbar'
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, People, Work } from '@mui/icons-material';

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        setSelectedItem(location.pathname);

    }, [location.pathname]);

    const onClose = async () => {
        navigate("/")
    }

    return (
        <Stack sx={{
            flex: 0,
            height: "100vh",
            minWidth: '200px',
            p: 1,
        }}>
            <Stack sx={{
                height: '100px',
                p: 3
            }}>
                {//<img src={logo}></img>
                }
            </Stack>
            <Stack flex={1} alignItems={'flex-start'} justifyContent={'flex-start'}>
                <List component="nav" sx={{ p: 0, m: 0, flex: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <ItemNavbar text={'Panel Principal'} ruta={'/Home'} rutaC={'/Home'} selected={selectedItem} setSelectedItem={setSelectedItem}>
                        <Home />
                    </ItemNavbar>
                    <ItemNavbar text={'Panel de trabajo '} ruta={'/Work-panel'} rutaC={'/Work-panel'} selected={selectedItem} setSelectedItem={setSelectedItem}>
                        <Work />
                    </ItemNavbar>
                </List>
            </Stack>
            <Stack height={'50px'}>
                <Button onClick={onClose} color='secondary' sx={{ justifySelf: 'flex-end' }} variant='outlined' >Cerrar Sesión</Button>
            </Stack>
        </Stack>
    )
}
