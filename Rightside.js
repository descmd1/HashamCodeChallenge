import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Calendar from 'react-calendar';
import  {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import {makeStyles} from '@material-ui/core/Styles';
import img from  './img/avatar.png';

const useStyles = makeStyles({
image:{
    height: 162,
    width: 141,
    left: 946,
    borderRadius: 0,
    display:'flex',
    paddingBottom:20
    

}
})

const Rightside =()=>{
    const classes = useStyles();
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    }
    return(
        <div>
           
      <Button variant="outlined" disabled style={{marginBottom:15, marginLeft:205}}>
        <NotificationsIcon/>
      </Button>
      <Button variant="outlined" disabled style={{marginLeft:5, marginBottom:15}} >
        <Brightness5OutlinedIcon/>
        </Button>
            <Paper elevation={4} style={{marginBottom:55, 
                backgroundColor:'#65A2B1',height:149, width:350}} >
            <Typography style={{fontSize:10,  color:'white', 
            marginLeft:70}}>Try PRO version</Typography>
            <Typography style={{fontSize:8, color:'white', 
            marginLeft:70}}>Unlock full power of calender</Typography>
            <Typography style={{fontSize:8, color:'white', 
            marginLeft:70}}>for two weeks for free</Typography>

            <div className={classes.image}>
            <img src={ img } alt=''></img>
            </div>
            </Paper>
            <Paper elevation={2} style={{ backgroundColor:'#F9F9F9',
            borderRadius:26}}>
        <div className="calender">
            <Calendar 
      value={dateState}
      onChange={changeDate}
      />
      </div>
      </Paper>

      <Paper elevation={4} style={{marginTop:20,
         backgroundColor:'#F9F9F9', height:68, borderRadius:26}} >
          <Grid container style={{marginLeft:30}}>
              <Grid item>    
            <Typography style={{fontSize:8, marginLeft:35}}>Project Manager <br/>
            <Typography style={{fontSIze:15,}}
            >Client Meeting</Typography></Typography>
            </Grid>
            <Grid item>
            <Typography style={{fontSize:10,marginLeft:90,
                marginTop:8}}>+ NEW</Typography>  
            </Grid>
            </Grid>
            <Button variant="contained" 
            style={{backgroundColor:'#EDEFF3', 
            width:180, height:30,borderRadius:20}}>
          <Button variant="contained" style={{backgroundColor:'white',
           borderRadius:26, alignSelf:'left'}}>
            <LocalPhoneIcon 
            style={{backgroundColor:'#FFFFFF', 
            color:'green', borderRadius:50,height:18, }} />
            </Button>
            <Typography style={{fontSize:6, 
                textTransform:'none', color:'black', marginLeft:20}}>swipe to call</Typography>
            </Button>
            </Paper>
        </div>
    );
}
export default Rightside;