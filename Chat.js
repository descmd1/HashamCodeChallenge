import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import HistoryIcon from '@mui/icons-material/History';
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Chat (){
    return(
    <div>
       <Grid container style={{marginLeft:170, marginBottom:25}}>
           <Grid item>
           <ReplayIcon style={{color:'orange', width:40}} />
           </Grid>
           <Grid item>
           <Typography style={{fontSize:8,marginLeft:2}}>tasks Remaining</Typography>
           <Typography style={{fontSize:8, marginLeft:2}}>12/15</Typography>
           </Grid>
           <Grid item>
           <HistoryIcon style={{color:'green', width:40}}/> 
           </Grid>
           <Grid item>
           <Typography style={{fontSize:8, marginLeft:2}}>tasks Left</Typography>
           <Typography style={{fontSize:8, marginLeft:2}}>12/15</Typography>
           </Grid>
           <Grid item>
           <ReplaySharpIcon style={{color:'#ff5722', width:40}}/>
           </Grid>
           <Grid item> 
           <Typography style={{fontSize:8, marginLeft:2}}>tasks Done</Typography>
           <Typography style={{fontSize:8, marginLeft:2}}>12/15</Typography> 
           </Grid>
            </Grid> 
            <Grid container style={{marginLeft:180}}>
                <Grid item>
                    <Typography style={{fontSize:12,}}> Progress Stats</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{marginLeft:100, fontSize:9}}> days</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{marginLeft:15, fontSize:9}}>weeks</Typography>  
                </Grid>
                <Grid item>
                    <Typography style={{marginLeft:15, fontSize:9}} >months</Typography>
                </Grid>
            </Grid>
    </div>
    )
}
export default Chat;