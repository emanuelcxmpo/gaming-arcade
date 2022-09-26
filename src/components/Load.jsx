import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Loading = () => {
    return (
        <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50
        }}>
            <CircularProgress />
            <Typography
                variant="h6"
                sx={{
                    color: 'white',
                }}
            >
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;