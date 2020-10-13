import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    title:{
        marginLeft: '3rem',
    },
    links:{
      textDecoration: 'none',
      marginLeft: '1rem',
      color: 'white'
    }
  }));
  
function Navigation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit">
            <Typography variant="h6" >
              Local 4 Vocal
            </Typography>  
            </IconButton>
            <Typography className={classes.title}>
            <Link className={classes.links} to='/home' color="text">Home</Link>            
            <Link className={classes.links} to='/register'>Register Business</Link>
            <Link className={classes.links} to='/registered'>Registered Business </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navigation
