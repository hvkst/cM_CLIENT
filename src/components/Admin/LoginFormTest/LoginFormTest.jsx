import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, TextField } from '@mui/material';
import { LoginFormContainer } from './LoginFormTest.style';
import { ErrorContext } from '../../../context/ErrorContext';
import AlertSlide from '../../Main/AlertSlide/AlertSlide';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyLoginState = {
  username: '',
  password: '',
};

export default function LoginFormTest({ handleClose }) {
  const [loginState, setLoginState] = useState(emptyLoginState);
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const { error, setError, setErrorMessage } = useContext(ErrorContext);

  const handleChange = (e) => {
    setLoginState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async () => {
    try {
      if (loginState.username === '' || loginState.password === '') return;
      const formBody = loginState;
      console.log(formBody);

      const url = BASE_URL + '/auth/login';
      console.log('url:', url);

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formBody),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('data.user:', data.user);
        console.log('Login success');

        if (data.user.isAdmin) {
          console.log('try admin backend...');
          navigate('/adminbackend');
        } else if (!data.user.isAdmin) {
          navigate('/userbackend');
        }
      } else {
        setError(true);
        setErrorMessage(data.error);
        console.log(data.error);
      }

      loginUser(data.user);
      handleClose();
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...LOGIN_CLIENT');
    setLoginState(emptyLoginState);
  };

  return (
    <>
      {error && <AlertSlide severity="error" />}

      <LoginFormContainer>
        <FormControl
          sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch', minWidth: '30ch' },
          }}
        >
          <TextField size="small" type="text" name="username" value={loginState.username} onChange={handleChange} label="Username" />
          <TextField size="small" type="password" name="password" value={loginState.password} onChange={handleChange} label="Password" />
          <Button sx={{ m: 1, px: 4, alignSelf: 'flex-end' }} size="small" variant="outlined" onClick={sendToServer}>
            Login
          </Button>
        </FormControl>
        <p>
          Not a user yet? <a href="/contactform">Get in touch!</a>{' '}
        </p>
      </LoginFormContainer>
    </>
  );
}

// export default LoginFormTest;
