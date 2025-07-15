import React from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function Home() {

    const navigate = useNavigate();
    return (<>
        <Grid container flexDirection={'column'} textAlign={'center'}>
            <Box>
                <h1 style={{ margin: 0, fontSize: '5rem' }}>Welcome</h1>
                <p style={{ fontSize: '1.3rem' }}>
                    For product list click on below link
                </p>
                <br />
                <Button variant="contained" size="medium" onClick={() => navigate('/product-list')}>
                    Product List
                </Button>
            </Box>
        </Grid>
    </>)

}