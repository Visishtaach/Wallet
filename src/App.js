import React,{useState} from 'react'
import './App.css';
import { Route, Switch } from 'react-router';
import { Paper, Button } from '@mui/material';
import { createTheme, ThemeProvider,} from '@mui/material/styles'
import Login from './components/Signup/Login';
import SignUp from './components/Signup/SignUp';
import CreateWallet from './components/Signup/CreateWallet';
import Tour from './components/Layout/Tour';
import Home from './components/Layout/Home';

function App() {
  const [mode,setMode]= useState(true);
  const theme= createTheme({
      palette:{
          mode:mode ? "light" : "dark",
      }

})
  return (
   <>
   <ThemeProvider theme={theme}>
    <Paper sx={{height:"100vh" }}>
    <Button onClick={()=>{setMode(!mode)}}>Change Theme</Button>
    <Switch>
    
      <Route path="/" exact>
      <div className="App">
          <SignUp />
      </div>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/createWallet">
        <CreateWallet/>
       
      </Route>
      <Route path="/tour">
        <Tour/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
    </Switch>
    </Paper>
    </ThemeProvider>
    </>
    
  );
}

export default App;
