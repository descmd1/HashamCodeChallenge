import React from "react";
import { Drawer } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/Styles';
import { Button, Paper, Typography } from "@mui/material";
import SpeedIcon from '@mui/icons-material/Speed';
import { Icon } from '@iconify/react';
import Grid from '@mui/material/Grid';
import SdCardIcon from '@mui/icons-material/SdCard';

const useStyles = makeStyles({
drawer:{
    width: 150,
},
drawerPaper:{
    width: 150,
    elavtion: 12,
    marginLeft:10
},
root:{
    display: 'flex'
}

})

const SideDrawer=()=>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <Drawer className={classes.drawer}
        variant="permanent" 
        anchor="left"
        classes={{paper:classes.drawerPaper}}>
            <Icon icon="twemoji:detective-medium-skin-tone" 
            style={{backgroundColor:'brown', 
            marginLeft:60, borderRadius:100, 
            marginBottom:15, height:30, width:30}} />
           <Typography style={{fontSize:10}}>
               Prabhatsinh Rathod
           </Typography>
           <Typography style={{fontSize:10, marginBottom:10}}>
               UI UX Designer
           </Typography>
           
          
           <Button variant="contained" 
           style={{textTransform:'none', height:18, marginRight:27, 
           marginBottom:10, marginLeft:10}}>
           <SpeedIcon stylye={{width:7, height:6,}}/> 
           <Typography style={{fontSize:8, marginLeft:4}}>Become a pro</Typography>
           </Button>
           

          <Grid container style={{marginLeft:10}}>
               <Grid item>
               <SpeedIcon stylye={{width:30}}/>
               </Grid>
               <Grid item>
               <Typography style={{marginBottom:20, fontSize:9, 
                marginLeft:8}}>dashboard </Typography>
               </Grid>
               </Grid>

            <Grid container  style={{marginLeft:10}}>
               <Grid item>
               <Icon icon="fa6-solid:signal" stylye={{width:30}}/>
               </Grid>
               <Grid item>
               <Typography style={{marginBottom:20, fontSize:9, 
                marginLeft:8}}> Menu 1</Typography>
               </Grid>
               </Grid>
           
               
          <Grid container  style={{marginLeft:10}}>
               <Grid item>
               <Icon icon="fluent:building-bank-28-filled" stylye={{width:30}}/>
               </Grid>
               <Grid item>
               <Typography style={{marginBottom:20, fontSize:9, 
                marginLeft:8}}>Menu 2</Typography>
               </Grid>
               </Grid>

               <Grid container  style={{marginLeft:10}}>
               <Grid item>
               <Icon icon="dashicons:businessperson" stylye={{width:30}}/>
               </Grid>
               <Grid item>
               <Typography style={{marginBottom:20, fontSize:9, 
                marginLeft:8}}> Menu 3</Typography>
               </Grid>
               </Grid>

                <Grid container  style={{marginLeft:10}}>
               <Grid item>
               <SpeedIcon stylye={{width:30}}/>
               </Grid>
               <Grid item>
               <Typography style={{marginBottom:20, fontSize:9, 
                marginLeft:8}}> Menu 4</Typography>
               </Grid>
               </Grid>


               <Grid container  style={{marginLeft:10}}>
               <Grid item>
               <Icon icon="mdi:text-box-multiple-outline" stylye={{width:30}}/>
               </Grid>
               <Grid item>
               <Typography style={{marginBottom:20, fontSize:9, 
                marginLeft:8}}>Menu 5</Typography>
               </Grid>
               </Grid>

              <Grid container  style={{marginLeft:10}}>
               <Grid item>
               <Icon icon="fa6-solid:hands-holding" stylye={{width:30}}/>
               </Grid>
               <Grid item>
               <Typography style={{marginBottom:20, fontSize:9, 
                marginLeft:8}}>Menu 6</Typography>
               </Grid>
               </Grid>

               <Paper elevation={1} 
               style={{
                   width:100, height:100, 
                   borderRadius:8, marginBottom:25, marginLeft:10}}>
               <SdCardIcon 
               style={{marginBottom:10,
               height:40, width:60, color:'purple'}}/>
               <Typography 
               style={{fontSize:9}}
               >Buy More Storage</Typography>
               <Button varaint="contianed"
                style={{textTransform:'none', fontSize:8,
                backgroundColor:'blue', height:10}}
                >
                   <Typography style={{fontSize:8, color:'white'}} >Buy Now</Typography> 
                </Button>
               </Paper>

               <Grid container style={{marginLeft:10}}>
               <Grid item>
               <Icon icon="dashicons:businessperson" stylye={{width:30}} />
               </Grid> 
               <Grid item>
            <Typography style={{marginBottom:10, fontSize:9, marginLeft:8}}>
            Menu 7
            </Typography>
               </Grid>
               </Grid>
        </Drawer>
        </div>
    );
}
export default SideDrawer;