import React,{useState} from 'react';
import { Container, Box, Stack, Typography,ListItemButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconButton from '@mui/material/IconButton';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import Link from '@mui/material/Link';

const Nav = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
        <Stack>
            
        </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">
              <IconButton size="large">
                <NotificationsNoneOutlinedIcon
                  sx={{ fontSize: '45px', color: 'white', border: 'black' }}
                />
              </IconButton>
            </Typography>
            <Typography variant="body2">
              <IconButton size="large">
                <TuneOutlinedIcon
                  sx={{ fontSize: '45px', color: 'white', border: 'black' }}
                />
              </IconButton>
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-evenly" backgroundColor="#5072A7" height="50px">
          
            <ListItemButton href="#" variant="body1" color="black"  selected={selectedIndex === 0}
             onClick={(event) => handleListItemClick(event, 0)}>
           <ListItemIcon>
                <ShieldOutlinedIcon/>
            </ListItemIcon>
                Wallet
               
            </ListItemButton>
            <ListItemButton href="#"  variant="body1" color="black"  selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
           <ListItemIcon>
                <ElectricBoltOutlinedIcon/>
          </ListItemIcon>
                Discover
               
            </ListItemButton>
            <ListItemButton href="#"  variant="body1" color="black"  selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
           <ListItemIcon>
                <WidgetsOutlinedIcon/>
          </ListItemIcon>
                Browser
               
            </ListItemButton>
            <ListItemButton href="#"  variant="body1" color="black"  selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemIcon>
                <SettingsOutlinedIcon/>
          </ListItemIcon>
               Settings
               
            </ListItemButton>
          </Stack>
      
    </>
  );
};

export default Nav;
