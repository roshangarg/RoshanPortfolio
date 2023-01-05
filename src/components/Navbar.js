import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {
  Box,
 
  SwipeableDrawer,
 
} from "@material-ui/core";
import { Block } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,

  },
  active:{
     padding:'0.5rem 1.5rem',textDecoration:'none', color:'white',
    borderRadius:'1rem', border:'1px solid blue'
  },
  inactive:{
    padding:'1rem 1.5rem',textDecoration:'none', color:'white',
    
  },
  paper: {
    background: "black"
  },
 
}));


const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const matches = useMediaQuery('(min-width:700px)');
  const [open, setOpen] = useState(false);
 
  const routes = [
    {
      name : 'Home',
      path :'/',
    },
    {
      name : 'About',
      path :'/about',
    },
    {
      name : 'Project',
      path :'/project',
    }, {
      name : 'Skills',
      path :'/skills',
    }, {
      name : 'Contact',
      path :'/contact',
    }
  
  ]
  return (
    <div className={classes.root}>
    <AppBar elevation={0} style={{background:"rgba(2, 5, 14,0.5)"}} position="static">
      <Toolbar>
        
        <Typography variant="h6" className={classes.title}>
         Roshan Garg
        </Typography>

       { matches && 
        routes.map((item) => (
          <Box key={item.path} style={{}} >

            <Link className={location.pathname === item.path ? classes.active : classes.inactive} to={item.path}>{item.name}</Link>
          </Box>
        ))
       }
       { !matches && 
       <>
       <IconButton
       edge="start"
       
       aria-label="icon drawer"
       onClick={() => {
         setOpen(true);
       }}
       
     >
       <MenuIcon
        style={{color:'white'}}
         fontSize="large"
       />
     </IconButton> 
     <SwipeableDrawer
     anchor="right"
     open={open}
     onClick={() => {
       setOpen(false);
     }}
     onOpen={() => {}}
     classes={{ paper: classes.paper }}
   >
     <div style={{ width: 240 }}>
       
       
             {routes.map((item) => (
              <Box style={{ marginTop:'1rem' , display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center' ,width:'100%'}}>

                <Link to = {item.path} className={location.pathname === item.path ? classes.active : classes.inactive}> {item.name}</Link>
              </Box>
             ))}
        

     </div>
   </SwipeableDrawer>
   </>
                  
       }
       
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Navbar