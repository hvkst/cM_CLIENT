import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, TextField } from '@mui/material';
import { ErrorContext } from '../../../context/ErrorContext';
import { LoginFormContainer } from './LoginForm.style';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyLoginState = {
  username: '',
  password: '',
};

export default function LoginForm({ handleClose, size }) {
  const [loginState, setLoginState] = useState(emptyLoginState);
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);
  const { setError, setErrorMessage } = useContext(ErrorContext);

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

        loginUser(data.user);
        if (data.user.isAdmin) {
          setTimeout(() => {
            navigate('/adminbackend');
          }, '500');
        } else if (!data.user.isAdmin) {
          setTimeout(() => {
            navigate('/userbackend');
          }, '500');
        }
      } else {
        setError(true);
        setErrorMessage(data.error);
        console.log(data.error);
      }

      if (handleClose !== undefined) handleClose();
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...LOGIN_CLIENT');
    setLoginState(emptyLoginState);
  };

  return (
    <>
      <LoginFormContainer>
        <FormControl
          sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch', minWidth: '30ch' },
          }}
        >
          <TextField size={size} type="text" name="username" value={loginState.username} onChange={handleChange} label="Username" />
          <TextField size={size} type="password" name="password" value={loginState.password} onChange={handleChange} label="Password" />
          <Button sx={{ m: 1, px: 4, alignSelf: 'flex-end' }} size={size} variant="outlined" onClick={sendToServer}>
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
