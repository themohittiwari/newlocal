import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button,FormControl,TextField,Grid,Select,MenuItem,InputLabel,Typography} from '@material-ui/core';
import { connect } from 'react-redux';
import {registerAction,editedAction} from '../../Store/Action/registerAction';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        marginTop:'2rem',
        minWidth: 500,
      },
    margin: {
        marginTop:'2rem'
    },
    root:{
        marginTop:'2rem',
        width:'100%',
    },
    others : {
        display:'flex'
    }
  }));
function Register(props) {
    const classes = useStyles()
    if(props.edited === null){
        var initialState = {
            bname : '',
            bowner : '',
            members : '',
            type : '',
            date : ''
        }
    }
    else {
        
    if(props.edited.dets.edit === null){
        initialState = {
            bname : '',
            bowner : '',
            members : '',
            type : '',
            date : ''
            }
        }
    }
    const [state, setstate] = useState(initialState)
    const getDets=(e)=>{
        let date = new Date().toDateString()
        e.persist()
        setstate( prevState =>({ ...prevState,[e.target.name] : e.target.value,edit:null,date}) )
    }
    
    const onSubmit=()=>{
        
        if ((state.bname && state.bowner && state.members) === '') 
        return alert('All fields must not empty')
        let copy = props.business
        if(props.edited === null) props.newbusiness(state)
        else {
            copy[props.edited.index] = state
            props.edit(copy)
        }
        props.history.push('/registered')
    }

    return (
        <div className={classes.root}>
        <Grid spacing={2} container>
            <Grid item sm={2}></Grid>
            <Grid item sm={8}>
            <Typography variant='h4' color='primary'>
            Register Your Business Here !
            </Typography>
            <TextField
            value={state.bname}
            name='bname'
            onChange={getDets} 
            variant='outlined' 
            className={classes.root} 
            label='Business name' 
            />
            <TextField
            value={state.bowner}
            name='bowner'
            onChange={getDets} 
            variant='outlined' 
            className={classes.root} 
            label='Owner name ' 
            />
            <TextField
            value={state.members}
            name='members'
            onChange={getDets} 
            variant='outlined' 
            id="standard-number" 
            label="Number"
            type="number"
            InputLabelProps={{
                    shrink: true,
            }}
            className={classes.margin}
            />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Type"
                name='type'
                value={state.type}
                onChange={getDets}
                >
                <MenuItem value={'Partnership'} >Patnership</MenuItem>
                <MenuItem value={'Corporation'} >Corporation</MenuItem>
                <MenuItem value={'Merchandising'} >Merchandising</MenuItem>
                <MenuItem value={'Manufacturing'} >Manufacturing</MenuItem>
                <MenuItem value={'Service'} >Service</MenuItem>
                <MenuItem value={'Non-Profit organization'} >Non-Profit organization</MenuItem>
                <MenuItem value={'Other'} >Other</MenuItem>
                </Select>
            </FormControl>
                <Typography className={classes.margin}>
                    <Button variant='outlined' color='primary'>Back</Button>
                    <Button onClick={onSubmit} variant='outlined' style={{marginLeft:'1rem'}} color='secondary'>Submit</Button>
                </Typography>
            </Grid>
            <Grid item sm={2}></Grid>
        </Grid>
      </div>
    )
}
const mapstatetoprops=state=>({
    business : state.buss,
    edited : state.editDets
})

const mapdispatchtoProps=({
 newbusiness : registerAction,
 edit : editedAction
})
export default connect(mapstatetoprops,mapdispatchtoProps)(Register)
 