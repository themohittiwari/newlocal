import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {removeAction} from '../../Store/Action/registerAction';
import {editAction} from '../../Store/Action/registerAction';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop:'3rem',
    marginLeft:'2rem',
    minHeight: 250
  },
  margin:{
    marginTop:'1rem'
  }
});

function RegisteredBuss(props) {
  const classes = useStyles();
  const onDelete=(index)=>{
    let deletedOne=props.business.filter((b,i)=> i !== index )
    props.leftBusiness(deletedOne)
  }

  const oneditDets=(b,index)=>{
    const data = { dets: b,index}
    props.edit(data)
    props.history.push('/register')
  }

  let allBusiness = props.business.map( (b,index)=> 
  <Card key={index} className={classes.root}>
      <CardActionArea>
      <CardContent >
      <Typography gutterBottom variant="h4" component="h1">
        {b.bname}
      </Typography>
      <Typography variant="body1" color="textSecondary">
       Date registered : {b.date}
      </Typography>
      <Typography variant="h6" color="textSecondary">
       Owner : {b.bowner}
      </Typography>
      <Typography className={classes.margin} variant="body1" color="textSecondary" component="p">
      Group members :  {b.members}
      </Typography>
      <Typography className={classes.margin} variant="body1" color="textSecondary" component="p">
        Business Type : {b.type}
      </Typography>
    </CardContent>
      </CardActionArea>
      <CardActions style={{marginTop: '0.5rem'}}>
        <Button
        size="small" 
        variant='outlined' 
        color="primary"
        onClick={()=>oneditDets(b,index)}
        >
        Edit
        </Button>
        <Button 
        size="small" 
        variant='outlined' 
        color="secondary"
        onClick={()=>onDelete(index)}
        >
        Remove
        </Button>
      </CardActions>
    </Card>
  )
  return (
      <Grid container direction='row'>
        {allBusiness}
      </Grid>
  );
}

const mapstatetoprops =state=>({
  business : state.buss
})
const mapdispatchtoProps=({
  leftBusiness : removeAction,
  edit : editAction
})
export default connect(mapstatetoprops,mapdispatchtoProps)(RegisteredBuss)