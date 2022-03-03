import React from 'react';
import './App.css';
import Body from './Body';
import Chat from './Chat';
import SideDrawer from './SideDrawer';
import Rightside from './Rightside';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid>
       <Body />
       <Chat/>
       </Grid>
       <Grid item style={{marginLeft:30}}>
       <Rightside/>
       </Grid>
       </Grid>
       <SideDrawer/>
    </div>
  );
}

export default App;
