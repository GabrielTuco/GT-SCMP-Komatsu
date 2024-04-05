import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ItemNavbar = ({ children, ruta, rutaC, selected, setSelectedItem, text }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(ruta)
    setSelectedItem(rutaC)
  }

  const isSelected = selected == rutaC ? true : `/${selected.split('/')[1]}` == ruta
  const sxProp = {
    color: isSelected ? '#fff' : '#FABA5F',
  }

  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        flex: 0,
        mt: 1,
        py: 0,
        px: 1,
        borderRadius: 1,
        minHeight: 40,
        bgcolor: isSelected ? '#FABA5F' : 'none',
        color: '#fff',
        '&:hover': {
          bgcolor: '#FABA5F',
          '& .MuiSvgIcon-root': {
            color: '#fff',
          },
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 40, }}>
        {React.cloneElement(children, { sx: sxProp })}
      </ListItemIcon>

      <ListItemText
        primary={text}
        primaryTypographyProps={{ fontWeight: 'normal', fontSize: "0.9em", }}
      />

    </ListItemButton>
  )
}
//FED800