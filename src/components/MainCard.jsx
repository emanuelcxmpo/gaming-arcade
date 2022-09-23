import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { border, fontFamily } from '@mui/system';

export default function MainCard(props) {
    const { name, image, rating, released } = props
    return (
        <>
            <Card sx={{ width: 320, height: 400, margin: '10px' }}>
                <CardMedia
                    component="img"
                    alt="videogame image"
                    height="220"
                    image={image}
                />
                <CardContent sx={{ backgroundColor: '#', display: 'flex', flexDirection: 'column', paddingTop: '20px' }} >
                    <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Poppins', color: '#212121', textAlign: 'center' }}>
                        {name}
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: 'Poppins', color: '#212121', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                        <strong>Released:</strong>{released}
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: 'Poppins', fontWeight: '500', color: '#212121', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                        <strong>Rating:</strong> ⭐ {rating}
                    </Typography>
                    <Stack alignItems="center" marginTop='20px' >
                        <Button variant="contained" color='secondary' size="small" sx={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                            Ver más
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}
