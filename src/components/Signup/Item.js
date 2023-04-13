import React from 'react';
import { Stack, Typography } from '@mui/material';
function Item({item,title}) {
   console.log(item);
  return (
    <>
    <Stack  lg justifyContent="center" alignItems="center" mt={1} >
      <img
        src={item.imageSrc}
        alt=" loading  "
        style={{ height: '39vh', }}
      />
      <Typography variant="h4" p={1} style={{color:'Gray'}}>{title}</Typography>
      <Typography variant='body1' style={{color:'darkgray'}}>{item.description}</Typography>


    </Stack>
    
    </>
  );
}

export default Item;
