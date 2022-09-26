import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MainCard(props) {
    const { name, image, rating, released } = props
    return (
        <>
            <Card sx={{ width: 380, height: 400, margin: '10px', borderRadius: '30px', boxShadow: 8 }}>
                <CardMedia
                    component="img"
                    alt="videogame image"
                    height="220"
                    image={image}
                />
                <CardContent sx={{ backgroundColor: '#202020', display: 'flex', flexDirection: 'column', paddingTop: '20px' }} >
                    <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Poppins', color: '#FFFFFF', textAlign: 'center' }}>
                        {name}
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: 'Montserrat', color: '#FFFFFF', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                        <strong>Released:</strong>{released}
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: '#FFFFFF', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                        <strong>Rating:</strong> ⭐ {rating}
                    </Typography>
                    <Stack alignItems="center" marginTop='20px' >
                        <Button variant="contained" color='primary' size="medium" sx={{
                            fontFamily: 'Montserrat', fontWeight: '600', borderRadius: '10px', backgroundColor: '#373737', '&:hover': {
                                backgroundColor: '#FFFFFF',
                                color: '#000000'
                            }, textTransform: 'capitalize'
                        }}>
                            Conocer más
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}
