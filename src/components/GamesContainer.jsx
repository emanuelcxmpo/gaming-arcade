import { Box } from '@mui/material';

import MainCard from './MainCard';

const GamesContainer = props => {
    const { gamesData } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
            {gamesData.map(elemento => (
                <MainCard name={elemento.name} image={elemento.background_image} released={elemento.released}
                    rating={elemento.rating} />
            ))}
        </Box>
    );
};

export default GamesContainer;