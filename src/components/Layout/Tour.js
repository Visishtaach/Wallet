import React from 'react';
import { useHistory } from 'react-router';
import { Box, Container } from '@mui/material';
import Stories from 'react-insta-stories';
import { story } from './Story';

const Tour = () => {
  const history = useHistory();

  const closeHandler = () => {
    history.replace('/home');
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            position: 'relative',
            left: '90%',
            top: 60,
            color: 'white',
            cursor: 'pointer',
            zIndex: 'modal',
            font: '20px',
          }}
          onClick={closeHandler}
        >
          X
        </Box>
        <Box sx={{ bgcolor: '#cfe8fc', height: 'auto', color: 'white' }}>
          <Stories
            loop={true}
            stories={story}
            width="auto"
            keyboardNavigation={true}
            isPaused={true}
          />
        </Box>
      </Container>
    </>
  );
};

export default Tour;
