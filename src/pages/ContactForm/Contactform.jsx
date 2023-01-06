// import axios from 'axios';
import { Button, Checkbox, FormControl, FormControlLabel, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
// import { BASE_URL } from '../../../consts';
import { PageContainer, ContactPaper } from './ContactForm.style';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultState = {
  name: '',
  phone: '',
  mail: '',
  product: '',
  message: '',
};

function ContactForm() {
  const [state, setState] = useState(defaultState);
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    if (state.name !== '' && state.mail !== '') setIsValid(true);

    setState((old) => {
      let newValue = event.target.value;
      return { ...old, [event.target.name]: newValue };
    });
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const sendToServer = async () => {
    try {
      const formBody = {
        name: state.name,
        phone: state.phone,
        mail: state.mail,
        product: state.product,
        message: state.message,
        callback: checked,
      };
      console.log(formBody);

      const url = `${BASE_URL}/contact/sendform`;
      console.log('url:', url);

      console.log('sending');

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formBody),
      });
      const data = await res.json();
      console.log(data);

      console.log('contact form send');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...CONTACT_FORM');
    setState(defaultState);
    setChecked(false);
    setIsValid(false);
  };

  return (
    <PageContainer>
      {/* <ContactFormContainer> */}
      <ContactPaper elevation={5}>
        <FormControl
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30vw', minWidth: '30ch' },
          }}
        >
          <h2>Contact Us!</h2>
          {/* <p>We look forward to hearing from you and assisting you with any inquiries you may have.</p> */}
          <TextField onChange={handleChange} value={state.name} name="name" label="Name" required />
          <TextField onChange={handleChange} value={state.phone} name="phone" label="Phone" type="number" />
          <TextField onChange={handleChange} value={state.mail} name="mail" label="Email" type="email" required />
          <TextField onChange={handleChange} label="Product / Service" name="product" value={state.product} select>
            <MenuItem value={'Website'}>Website</MenuItem>
            <MenuItem value={'Online Shop'}>Online Shop</MenuItem>
            <MenuItem value={'Consultation'}>Consultation</MenuItem>
            <MenuItem value={'Printer SetUp'}>Printer Set Up</MenuItem>
          </TextField>

          <TextField multiline onChange={handleChange} value={state.message} id="outlined-multiline-flexible" name="message" label="Message" />
          <FormControlLabel sx={{ m: 1 }} onChange={handleCheck} name="callback" control={<Checkbox />} label="Call me back!" />
          {isValid && (
            <Button sx={{ m: 1, px: 4, alignSelf: 'flex-end' }} onClick={sendToServer} variant="outlined">
              send
            </Button>
          )}
        </FormControl>
      </ContactPaper>
      {/* </ContactFormContainer> */}
    </PageContainer>
  );
}

export default ContactForm;
