import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/navbar/Navbar'

export const Base = ({ children, title }) => {

    return (
        <Stack flexDirection={'row'} maxHeight={'100vh'} width={'100%'} maxWidth={'100%'}>
            <Navbar />
            <Stack
                style={{
                    flex: 5,
                    height: '100vh',
                    maxHeight: '100vh',
                    width: '40%',
                    maxWidth: '100%',
                    background: '#F7F7FC',
                }}>
                <Stack
                    sx={{
                        zIndex: 0,
                        py: 2,
                        px: 4,
                        position: 'relative',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }}
                >
                    <Stack
                        flex={1}
                        flexGrow={0}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        py={2}
                    >
                        <Typography

                            variant="h5"
                            sx={{ textAlign: 'left', mb: 2, fontWeight: 'bold' }}
                        >
                            {title}
                        </Typography>
                    </Stack>
                    <Box
                        flex={1}
                        flexGrow={1}
                        sx={{ maxHeight: '100%', overflow: 'auto' }}
                    >
                        {children}
                    </Box>
                </Stack>

            </Stack>
        </Stack>

    )
}
