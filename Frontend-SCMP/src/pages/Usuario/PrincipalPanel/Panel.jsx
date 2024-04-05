import React from 'react'
import { Box, Typography, Stack, Paper, Button } from '@mui/material'
import List from '@mui/material/List';
export const Panel = ({ title, color, children, button }) => {
    return (
        <Stack component={Paper} sx={{
            flex: 1,
            borderRadius: 2,
            height: "100%",
            overflow: 'hidden',
            maxHeight: '100%'
        }}>
            <Stack
                sx={{
                    flex: 0,
                    background: color,
                    height: "30px",
                    justifyContent: "center",

                }} >
                <Typography color={'white'} fontWeight={'bold'} >
                    {title}
                </Typography>
            </Stack>
            <Stack sx={{ flex: 1, p: 1, gap: 2, maxHeight: '95%' }}>
                <Stack sx={{ flex: 1, gap: 2, overflow: 'auto', maxHeight: '100%' }}>
                    {children}
                </Stack>
                <Stack >
                    {
                        button
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}

