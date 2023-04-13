import React, { useState } from 'react';
import { Box, Grid, TextField, Stack, Button, Typography } from '@mui/material';
import {useHistory} from 'react-router'
const Login = () => {

  const history = useHistory();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [cpswd, setCPswd] = useState(''); //to store user entered password for first time
  // const [reset, setReset] = useState(false);
  const handleButtonClick = (value) => {
    const index = otp.findIndex((item) => item === '');

    if (index !== -1) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });
    }
  };

  const handleBackspace = (index) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = '';
      if (index > 0 && !newOtp[index - 1]) {
        newOtp[index - 1] = '';
      }
      return newOtp;
    });
  };

  const confirmHandler = () => {
    let enteredPswd = '';
    otp.forEach((item) => {
      return (enteredPswd += item);
    });
    console.log(enteredPswd);
    setCPswd(enteredPswd);
    console.log('paswd', cpswd);
    // alert(pswd +' is eneterd password ' )
    // setReset(true)
    history.replace('/tour')
  };

  const renderInputField = (index, value) => {
    const isDisabled = value !== '';
    return (
      <TextField
        key={index}
        type="password"
        value={value}
        disabled={isDisabled}
        inputProps={{
          maxLength: 1,
          style: {
            border: 'none',
            outline: 'rgb(92 144 197)',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            fontSize: '20px',
          },
        }}
        onChange={(event) => {
          const { value: inputValue } = event.target;
          setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = inputValue;
            return newOtp;
          });
        }}
        onKeyDown={(event) => {
          if (event.key === 'Backspace' && value === '' && index !== 0) {
            event.preventDefault();
            handleBackspace(index - 1);
          }
        }}
      />
    );
  };
  return (
    <>
      <Typography
        variant="h4"
        color="secondary"
        text-align="center"
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="left"
      >
        Verify Password to Login
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        //   height="85vh"
        width="100vw"
        mt={5}
      >
        <Grid
          container
          direction="column"
          // spacing={2}
          display="flex"
          flex-direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Stack width="400px">
            <Grid
              item
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
              outline="rgb(92 144 197)"
            >
              {otp.map((value, index) => (
                <Grid key={index} item xs={2} fontSize="20px" color="red">
                  {renderInputField(index, value)}
                </Grid>
              ))}
            </Grid>

            <Grid
              item
              container
              justifyContent="center"
              backgroundColor="#E0FFFF"
              mt={3}
              p={3}
            >
              <Grid item container mt={2} spacing={1} justifyContent="center">
                {[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '',
                  '0',
                  'x',
                ].map((value, index) => (
                  <Grid key={index} item xs={4}>
                    {value === '' ? (
                      <div style={{ visibility: 'hidden' }}>.</div>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick(value)}
                        style={{
                          height: '100%',
                          width: '100%',
                          fontSize: '20px',
                        }}
                      >
                        {value}
                      </Button>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Button variant="contained" mt={2} p={3} onClick={confirmHandler}>
                        Verify
            </Button>
          </Stack>
          <Typography variant='caption' spacing={2}> Password adds an extra layer of security when using the app</Typography>
        </Grid>
        
      </Box>
    </>
  );
};

export default Login;
