import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from "axios";


function  SelectComponentFunctional(){

    const [age, setAge] = useState(19);
    const [menuItems, setMenuItems] = useState([]);


    async function getNames(){    
        const response = await Axios.get("http://5bb1bc576418d70014071c7e.mockapi.io/modal/jds")
        // console.log(response.data);
        const menuItems = response.data.map(item => <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>)
        setMenuItems(menuItems)
    }

    useEffect(() => {
        getNames();
    }, []);



    console.log("Age is", age)
  return (
      <div>
    <FormControl variant="outlined">
    <InputLabel  htmlFor="outlined-age-simple">
      Name
    </InputLabel>
    <Select
      name="age"
      value={age}
      onChange={event=> setAge(event.target.value)}
      input={<OutlinedInput name="age" id="outlined-age-simple" />}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
        {menuItems}
    </Select>
  </FormControl>
  </div>
  );
}

export default SelectComponentFunctional;