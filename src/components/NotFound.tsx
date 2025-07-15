import React from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Grid container flexDirection={'column'} textAlign={'center'}>
      <Box>
        <h1 style={{ margin: 0, fontSize: '5rem' }}>404</h1>
        <p style={{ fontSize: '1.3rem' }}>
          Oops! Looks like this page is Not Found / Under Development.
        </p>
        <br />
        {/* <a href="/" className="home-button">Go Home</a> */}
        <Button variant="contained" size="medium" onClick={() => navigate('/')}>
          Go Home
        </Button>
      </Box>
    </Grid>
  );
};

export default NotFound;
