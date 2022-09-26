import { Box, Button, Typography, Link } from '@mui/material';

const Footer = ({ previous, next, updateGames }) => {
    // console.log(previous);
    return (
        <Box sx={{ textAlign: 'center', marginTop: '40px', backgroundColor: '#373737', padding: '40px 20px 40px', borderRadius: '20px 20px 0 0 ' }}
        >
            <Button variant={!previous ? "contained" : 'primary'}
                size="medium"
                disabled={!previous}
                onClick={() => updateGames(previous)}
                sx={{
                    fontFamily: 'Montserrat', fontWeight: '600', borderRadius: '10px', backgroundColor: '#373737', textTransform: 'capitalize', '&:hover': {
                        backgroundColor: '#FFFFFF',
                        color: '#000000'
                    }
                }}>
                Anterior
            </Button>
            <Typography
                variant="body1"
                sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    color: 'white',
                    display: 'inline',
                    margin: '0 10px',
                }}
            >
                {!previous ? 'Pagina 1' : `Pagina ${Number(next.substr(-1)) - 1}`}

            </Typography>

            <Button
                size="medium"
                variant={!previous ? "contained" : 'primary'}
                disabled={!next}
                onClick={() => updateGames(next)}
                sx={{
                    fontFamily: 'Montserrat', fontWeight: '600', borderRadius: '10px', backgroundColor: '#373737', textTransform: 'capitalize', '&:hover': {
                        backgroundColor: '#FFFFFF',
                        color: '#000000'
                    }
                }}>
                Siguiente
            </Button>

            <Typography
                sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    color: 'white',
                    marginTop: '20px',
                }}
            >
                <Link href="https://twitter.com/emanuelcxmpo" target="_blank" color="inherit" rel="noreferrer">
                    @emanuelcxmpo
                </Link>
            </Typography>

            <Typography sx={{
                fontFamily: 'Montserrat',
                fontWeight: '200',
                color: 'white',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
            }}>

                Made with <img src='https://i.postimg.cc/Xvf7sC00/colombia.png' height={20} /> in Colombia

            </Typography>
        </Box>
    );
};

export default Footer;