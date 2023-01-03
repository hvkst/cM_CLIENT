// import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { DataInput } from '../../styles';
// import { BASE_URL } from '../../../consts';
// import { DataInput } from '../../styles';
import {} from './ContactForm.style';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultState = {
  title: '',
  description: '',
  prep: '',
  main: '',
  final: '',
};

function ContactForm() {
  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setState((old) => {
      let newValue = event.target.value;

      return { ...old, [event.target.name]: newValue };
    });
  };

  const handleClick = (e) => {
    // e.preventDefault();
    // updateSection(state, section, project, setProject);
  };

  const sendToServer = async () => {
    try {
      const formBody = state;
      console.log(formBody);

      const url = BASE_URL + '/auth/login';
      console.log('url:', url);

      // const res = await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify(formBody),
      // });
      // const data = await res.json();
      // console.log('data.user:', data.user);

      // loginUser(data.user);
      // console.log('Login success');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...LOGIN_CLIENT');
    setState(defaultState);
  };

  return (
    <>
      <h2>Contact Us!</h2>
      <FormControl
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <TextField onChange={handleChange} value={state.name} name="name" label="Name" required />
        <TextField onChange={handleChange} value={state.phone} name="phone" label="Phone" type="number" />
        <TextField onChange={handleChange} value={state.mail} name="mail" label="Email" type="email" required />
        <TextField id="outlined-select-currency" select label="Product / Service" defaultValue="Website Small Business">
          <MenuItem value={'Website Small Business'}>Website</MenuItem>
          <MenuItem value={'Online Shop'}>Online Shop</MenuItem>
          <MenuItem value={'Consultation'}>Consultation</MenuItem>
          <MenuItem value={'Printer SetUp'}>Printer Set Up</MenuItem>
        </TextField>

        <TextField multiline onChange={handleChange} value={state.text} id="outlined-multiline-flexible" name="text" label="Message" />
        <Button onClick={handleClick} variant="outlined">
          send
        </Button>
      </FormControl>
      {/* <Button onClick={sendToServer}>Signup</Button> */}
      {/* </ContactFormContainer> */}
    </>
  );
}

export default ContactForm;
