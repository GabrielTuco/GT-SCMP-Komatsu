import React from 'react'
import { Stack, Typography, Box, Checkbox } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const OSItem = ({ id, text, checkeds = [], setChecked }) => {

    const handleToggle = (value) => () => {
        const currentIndex = checkeds.indexOf(value);
        const newChecked = [...checkeds];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    return (
        <ListItem
            sx={{
                background: "#E8E8E8",
                borderRadius: 2,
            }}
            key={id}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle(id)}
                    checked={checkeds.indexOf(id) !== -1}
                />
            }

        >
            <ListItemText id primary={text} />
        </ListItem>

    )
}

/* <Stack>
            <Typography variant='h6'>
                {text}
            </Typography>
        </Stack> */