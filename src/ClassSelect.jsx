import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class SelectComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      age: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  render(){
    return (
      <div>
        <FormControl variant="outlined">
        <InputLabel  htmlFor="outlined-age-simple">
          Age
        </InputLabel>
        <Select
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          input={<OutlinedInput name="age" id="outlined-age-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
    );
  }
}

export default SelectComponent;