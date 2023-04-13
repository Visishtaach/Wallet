import { Box, Button, Container, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CurrencyBitcoinSharpIcon from '@mui/icons-material/CurrencyBitcoinSharp';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Gallrey from './Gallery';
import mc from '../../assets/buy.jpeg';
import bc4 from '../../assets/bc4.jpeg';
import NFT from '../../assets/nft.jpeg';

 export const story = [
    {
        content: (props) => (
            <div style={{ background: '#6699cc', padding: 20 , height: '100%', width:'100%', display:"flex", justifyContent:"center", alignItems:"center",flexDirection: 'column'}}>
                <Typography variant="h3"align='center' p={2}>✅</Typography> <br/>
                <Typography variant="h4" sx={{fontWeight: 'bold'}}>Let's explore your new wallet!</Typography>
                <Typography variant="h6" sx={{fontSize:'23px'}}>No dirty old receipts & half filled coffee loyalty cards in here...</Typography> <br/>
                <Typography variant="body2" align='center' >
                <IconButton size="large">
                <ShieldOutlinedIcon color="primary" sx={{ fontSize: "60px",padding:'10px', borderRadius:'50%', border:'blue',bgcolor:'white'}}/>
                </IconButton>

                </Typography>
            </div>
        ),
    },
    {
        content: (props) => (
            <div style={{ background: '#6699cc', padding: 20, height: '100%', width:'100%', display:"flex", justifyContent:"center", alignItems:"left",flexDirection: 'column' }}>
            <Typography variant="body2" align='left' >
                <IconButton size="large">
                <PermMediaOutlinedIcon sx={{ fontSize: "60px",padding:'10px', color:'orange'}}/>
                </IconButton>

                </Typography>
                <Typography variant="h4" sx={{fontWeight: 'bold'}}>Deposit NFTs</Typography>
                <Typography variant="h6" sx={{fontSize:'18px'}}>Store all your NFTs here-Solana,Ethereum,Polygon- we've got the chains to back it up</Typography>
                {/* <img src={NFT} alt="ntf image loading" style={{height:'250px', width:'85%',opacity:1,alignSelf:'center',marginTop:'10px'}}/> */}
                
                    <Gallrey />
                <br/>
                <Button variant="contained" mt={4} p={2} style={{backgroundColor:'white', color:'black',width:'89%',alignSelf:'center'}}>Deposit now</Button>
            </div>
        ),
    },
    {
      content: (props) => (
        <div
          style={{
            background: '#6699cc',
            padding: 20,
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h3" align="left">
            <IconButton size="large">
              <LocalOfferOutlinedIcon
                sx={{ fontSize: '60px', padding: '10px', color: 'orange' }}
              />
            </IconButton>
          </Typography>
          {/**/}
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Buy Crypto
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '18px' }}>
            Buy instantly via card to start getting the most out of your new
            wallet
          </Typography>
          <img src={mc} alt="ntf image loading" style={{height:'180px', width:'85%',opacity:1,alignSelf:'center',marginTop:'10px'  }}/>

       
          
         
           {/* <Typography variant="body2" >
            <img  className='spinImg'
              src={bc3}
              alt="coin"
              height="60px"
              width="60px"
              style={{ borderRadius: '20%', }}
            />
          </Typography> */}
          <Typography variant="h4" >
            {' '}
            <img className='spinImg2'
              src={bc4}
              alt="coin"
              height="70px"
              width="70px"
              style={{ borderRadius: '50%', }}
            />
          </Typography> 
          {/* </div> */}
          <Typography variant="body2" align="right">
            <CurrencyBitcoinSharpIcon
              sx={{
                fontSize: '40px',
                padding: '5px',
                color: 'white',
                backgroundColor: 'orange',
                borderRadius: '50%',

              }}
            />
          </Typography> 
          <Button
            variant="contained"
            mt={4}
            p={2}
            style={{
              backgroundColor: 'white',
              color: 'black',
              width: '89%',
              alignSelf: 'center',
            }}
            fontSize="bold"
          >
            Buy now
          </Button>
        </div>
      ),
    },
    {
        content: (props) => (
            <div style={{ background: '#6699cc', padding: 20 , height: '100%', width:'100%' , display:"flex", justifyContent:"center", alignItems:"left",flexDirection: 'column',}}>
<Typography variant="h3" align="left">
            <IconButton size="large">
              <FileDownloadOutlinedIcon
                sx={{ fontSize: '60px', padding: '10px', color: 'orange' }}
              />
            </IconButton>
          </Typography>
              <Typography variant="h4" sx={{fontWeight: 'bold'}}>Deposit Crypto</Typography>
                <Typography variant="h6" sx={{fontSize:'23px'}}>Deposit your crypto tokens from other wallets & exchanges, all in one place</Typography>
                <img src={NFT} alt="ntf image loading" style={{height:'250px', width:'85%',opacity:0.5}}/>
                <br/>
                <Button variant="contained" mt={4} p={2} style={{backgroundColor:'white', color:'black',width:'89%',alignSelf:'center'}}>Deposit now</Button>
            </div>
        ),
    },
  ];