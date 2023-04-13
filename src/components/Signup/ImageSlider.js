import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useHistory } from 'react-router-dom';
import Item from './Item';
import img1 from '../../assets/sec.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img1.jpeg'
import img4 from '../../assets/img4.jpeg'
import { Button, Box, Typography } from '@mui/material';

function ImageSlider(props) {
    const history = useHistory();
  var items = [
    {
      id: 1,
      imageSrc: img1,
      title:'Private and secure',
      description: 'Private keys never leave your device'
    },
    {
      id: 2,
      imageSrc: img2,
      title:'All assets in one place',
      description: 'View and store your assets seamlessly'
    },
    {
        id: 3,
        imageSrc: img3,
        title:'Trade assets',
        description: 'Trade your assets anonymously'
      },
      {
        id: 4,
        imageSrc: img4,
        title:'Explore decentralizedd apps',
        description: 'Earn, explore, utilize, spend, trade and more'
      },
  ];
  
  const createWalletHandler = () => {
        history.replace('/createWallet');
  }

  return (
    <>
      <Carousel 
        animation='fade'
        transition-duration="0s !important"
        autoPlay={true}
        swipe={true}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
    
            display:'none'
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: '1',
            top: 'unset',
          },
        }}

        indicatorIconButtonProps={{
        style: {
            padding: '3px',
            marginTop: '8rem',    // 1
             
        }
    }}
    activeIndicatorIconButtonProps={{
        style: {
            color: '#6699CC'
            
        }
    }}
      >
        {items.map((item) => (
          <Item key={item.id} item={item}  title={item.title}/>
        ))}
      </Carousel>
      <Box mt={5} p={3}>
        <Button variant="contained" size="large" style={{backgroundColor:'rgb(92 144 197)', color:'black'}} onClick={createWalletHandler}>create a new wallet</Button>
        <br />
        <Typography variant="body2" mt={1} p={3.4} style={{color:'rgb(92 144 197)'}}>
          I already have a wallet
        </Typography>
      </Box>

    </>
  );
}

export default ImageSlider;
