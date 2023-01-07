import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../../../consts';
import { UserContext } from '../../../context/UserContext';
import { LoginFormContainer, PageContainer } from './LoginForm.style';
import { Button, FormControl, TextField } from '@mui/material';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyLoginState = {
  username: '',
  password: '',
};

function LoginForm() {
  const [loginState, setLoginState] = useState(emptyLoginState);
  const navigate = useNavigate();
  const { loginUser, user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        navigate('/adminbackend');
      } else if (!user.isAdmin) {
        navigate('/userbackend');
      }
    }
  }, [user, navigate]);

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
      console.log('data.user:', data.user);

      loginUser(data.user);
      console.log('Login success');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...LOGIN_CLIENT');
    setLoginState(emptyLoginState);
  };

  return (
    <PageContainer>
      <SimplePaper>
        <LoginFormContainer>
          <FormControl
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30vw', minWidth: '30ch' },
            }}
          >
            <h2>Login</h2>
            <TextField type="text" name="username" value={loginState.username} onChange={handleChange} label="Username" />
            <TextField type="password" name="password" value={loginState.password} onChange={handleChange} label="Password" />
            <Button sx={{ m: 1, px: 4, alignSelf: 'flex-end' }} variant="outlined" onClick={sendToServer}>
              Login
            </Button>
          </FormControl>
        </LoginFormContainer>
      </SimplePaper>
    </PageContainer>
  );
}

export default LoginForm;
