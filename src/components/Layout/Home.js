import React from 'react'
import { Container, Box, Stack, Typography,ListItemButton } from '@mui/material';
import Nav from './Nav';
const Home = () => {
  return (
    <>
        <Container maxWidth="sm">
        <Box backgroundColor="skyblue" sx={{ height: '90vh' }}>
        <Nav />
        </Box>
      </Container>
    </>
  )
}

export default Home