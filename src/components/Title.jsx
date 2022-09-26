import React from 'react';
import { Typography } from '@mui/material';

const Title = () => {
    return (
        <Typography
            variant='h1'
            align='center'
            sx={{
                fontFamily: 'Bungee Outline',
                fontSize: '60px',
                fontWeight: 'bold',
                color: 'purple',
                display: 'flex',
                justifyContent: 'center',
                padding: '20px'
            }}
        >
            Gaming Arcade
        </Typography>
    )
}

export default Title;