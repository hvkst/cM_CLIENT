// import axios from 'axios';
import { useContext, useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, MenuItem, TextField } from '@mui/material';
import SimplePaper from '../../components/Main/SimplePaper/SimplePaper';
import { ErrorContext } from '../../context/ErrorContext';
import { PageContainer, ContactFormContainer } from './ContactForm.style';

import Alert from '@mui/material/Alert';
import { Fade, Slide } from '@mui/material';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultState = {
  name: '',
  phone: '',
  mail: '',
  product: '',
  message: '',
};

export default function ContactForm() {
  const { setError, setErrorMessage } = useContext(ErrorContext);
  const [state, setState] = useState(defaultState);
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    if (state.name !== '' && state.mail !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    const handleClose = () => {
      setSuccess((curr) => !curr);
    };

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

      if (res.ok) {
        console.log('here');
        setSuccess(true);
        // setError(true);
        // setErrorMessage('This is a message');
      } else {
        setError(true);
        setErrorMessage(data.error);
        console.log(data.error);
      }

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
    <div className="content-container">
      <PageContainer>
        <ContactFormContainer>
          <SimplePaper>
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

              {success ? (
                <Fade timeout={500} direction="up" in={success} mountOnEnter>
                  <Alert
                    onClose={() => {
                      setSuccess((curr) => !curr);
                    }}
                  >
                    This is a success alert — check it out!
                  </Alert>
                </Fade>
              ) : (
                <div>
                  <FormControlLabel
                    sx={{ m: 1 }}
                    onChange={handleCheck}
                    name="callback"
                    control={<Checkbox />}
                    label="I wish to be called back by phone."
                  />
                  {isValid && (
                    <Button sx={{ m: 1, px: 4, alignSelf: 'flex-end' }} onClick={sendToServer} variant="outlined">
                      send
                    </Button>
                  )}
                </div>
              )}
            </FormControl>
          </SimplePaper>
        </ContactFormContainer>
      </PageContainer>
    </div>
  );
}
