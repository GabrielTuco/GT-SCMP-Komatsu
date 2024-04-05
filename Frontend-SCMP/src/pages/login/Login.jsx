import React from 'react'
import { Stack, Typography, TextField, Box, Button } from '@mui/material'
import { useUser } from '../../hooks/useUser'

export const Login = () => {
    const { onInputChange, onLogin, formState } = useUser()

    return (
        <Box
            sx={{

                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                width: '100%'

            }}>

            <Stack component={"form"} onSubmit={onLogin}
                sx={{
                    background: 'white',
                    borderRadius: 2, p: 4,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                <h2>Iniciar Sesion</h2>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Usuario"
                    name="usuario"
                    autoComplete='nope'
                    autoFocus
                    variant="outlined"
                    size="small"
                    value={formState.usuario}
                    onChange={onInputChange}
                />

                <TextField
                    margin="normal"
                    sx={{ color: 'white' }}
                    required
                    fullWidth
                    autoComplete='nope'
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    variant="outlined"
                    size="small"
                    value={formState.password}
                    onChange={onInputChange}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 1, mb: 2 }}
                >
                    Iniciar Sesion
                </Button>

            </Stack>
        </Box>
    )
}
