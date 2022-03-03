import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { Icon } from '@iconify/react';

const Body =()=> {
    return (
      <div className="body"> 
      <Typography style={{fontSize:15, marginLeft:180}}>
        dashboard
        <Button 
        variant="outlined" disabled 
        style={{textTransform:'none', marginLeft:65}} >
          <SearchIcon style={{width:15}} />
            Search here..
        </Button>
        <Button variant="outlined" disabled 
        style={{marginLeft:12}}>+</Button>
        </Typography> 

        <Grid container style={{marginTop:10}} >
          <Grid item>
        <Typography variant="body2" style={{marginLeft:180, 
          fontSize:12}}>
          Ongoing Projects
          </Typography>
          </Grid>
          <Grid item>
        <Typography variant="body1" style={{marginLeft:55, 
          fontSize:10}} >
          Remaining
          </Typography>
          </Grid>
          <Grid item>
        <Typography variant="body1" style={{color:'blue',
         marginLeft:20, fontSize:10}} >
          Ongoing 
          </Typography>
          <Button variant="contained"
                style={{marginLeft:15, height:3, 
                backgroundColor:'blue', marginBottom:10}}/>
          </Grid>
          <Grid item>
        <Typography variant="body1" style={{marginLeft:20, fontSize:10}} >
          Completed
          </Typography>
          </Grid>
        </Grid>

        <Paper elevation={4} style={{width:350,height:200, 
          marginLeft:180, marginBottom:15}} >
        <Paper elevation={1} 
        style={{width:140, height:40, marginTop:2, 
        marginLeft:2, marginBottom:10, backgroundColor:'skyblue'}}>
          <Typography variant="body1" 
          style={{textAlign:'left',
           color:'white', fontSize:12}}>
             App Design</Typography>
          <Typography variant="body1" 
          style={{fontSize:9, textAlign:'left', 
          color:'white'}}>
            17 August 2021</Typography>
        </Paper>

          <Grid container>
          <Grid item>
          <Paper elevation={1} 
        style={{width:140, height:40, marginTop:2, 
        marginLeft:12, marginBottom:10, backgroundColor:'#ff5722'}}>
          <Typography variant="body1" 
          style={{textAlign:'left', color:'white',fontSize:12}}>
            App Design</Typography>
          <Typography variant="body1" 
          style={{fontSize:9, textAlign:'left', 
          color:'white'}}>
            17 August 2021</Typography>
        </Paper>
        </Grid>
        <Grid item>
        <Button variant="contained" disabled 
        size="large" 
        style={{borderRadius:50, marginLeft:60}}>
      <Icon icon="openmoji:woman-astronaut-medium-dark-skin-tone" 
      style={{backgroundColor:'purple', borderRadius:100,margin:2}} />
            <Icon icon="openmoji:boy-light-skin-tone" 
             style={{backgroundColor:'green', borderRadius:100, margin:2}}/>
            <Icon icon="openmoji:child-light-skin-tone" 
             style={{backgroundColor:'orange', borderRadius:100, margin:2}}/>

        </Button>
            </Grid>
        </Grid>
        <Grid container>
          <Grid item>
        <Paper elevation={1} 
        style={{width:140, height:40, marginTop:2, 
        marginLeft:2, marginBottom:10, backgroundColor:'orange'}}>
          <Typography variant="body1" 
          style={{textAlign:'left', 
          color:'white', fontSize:12}}>
            App Design</Typography>
          <Typography variant="body1" 
          style={{fontSize:9, textAlign:'left', 
          color:'white'}}>
            17 August 2021</Typography>
        </Paper>
        </Grid>
        <Grid item>
        <Button variant="contained" 
        size="large" 
        style={{borderRadius:50, marginLeft:60, 
        backgroundColor:'purple',}}></Button>
            <Button variant="contained"  
            size="small" 
            style={{borderRadius:50, 
            backgroundColor:'black', fontSize:10, 
            marginLeft:-20}}>80%</Button>
           
            </Grid>
            </Grid>

            <Grid container>
              <Grid item>
                <Button variant="contained" style={{size:9}} />
                </Grid>
              <Grid item> 
              <Typography style={{fontSize:9}} >Todo</Typography></Grid>

              <Grid item>
                <Button variant="contained"
                style={{width:15, height:2, backgroundColor:'#ff5722'}}/>
                </Grid>
              <Grid item> 
              <Typography style={{fontSize:9}}>Inprogress</Typography></Grid>

              <Grid item>
                <Button variant="contained" 
                style={{ backgroundColor:'orange'}}/>
                </Grid>
              <Grid item> 
              <Typography style={{fontSize:9}}>Completed</Typography></Grid>
            </Grid>
        </Paper>
      </div>    
    );
  }
  export default Body;
  