import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react"
import filterConstant from "../constants/filterConstant";
import { ITimespan } from "../interfaces/ITimespan";
import TextFieldTitle from "../utils/TextFieldTitle";


const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    select: {
      '& .MuiInputBase-input ': {
        border: '2px solid #4907a0'
      }
    }
  })
});


const Filter = () => {

const [filterModel, setFilterModel] = useState('');

useEffect(() => { 
//call API 
//set response reducer
  
},[filterModel])

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      justify='flex-start'
      alignItems='flex-start'
      direction='row'
    >
      <Grid item xs={9} sm={9} md={9} lg={9} xl={9} />
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <Select
            variant='filled'
            displayEmpty
            value={filterModel}
            onChange={(event:any) => {
              let value = event.target.value.toString();
              if( value === 'None')
                value = ''
              setFilterModel(value)
            }}
            style={{backgroundColor:'#ffffff'}}
          >
            <MenuItem disabled key='empty' value=''>
              <em style={{ color: '#4907a0', fontSize: 16, fontWeight: 'bold', marginLeft:10, marginRight: 10 }}>Filter by timespan</em>
            </MenuItem>
            <MenuItem key='none' value='None'>
              <em style={{ color: '#4907a0', fontSize: 16, fontWeight: 'bold', marginLeft:10, marginRight: 10  }}>None</em>
            </MenuItem>
            {filterConstant?.map((state: ITimespan, index: number) => (
              <MenuItem key={index} value={state.text}>
                <em style={{ color: '#4907a0', fontSize: 16, fontWeight: 'bold', marginLeft:10, marginRight: 10  }}>{state.text}</em>
              </MenuItem>
            ))}
          </Select>
      </Grid>
    </Grid>
  );
}

export default Filter;