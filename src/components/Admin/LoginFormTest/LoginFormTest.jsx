import { useContext, useEffect, useState } from 'react';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, TextField } from '@mui/material';
import { LoginFormContainer, PageContainer } from './LoginFormTest.style';
import CustomAlert from '../../Main/Alert/Alert';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyLoginState = {
  username: '',
  password: '',
};

export default function LoginFormTest() {
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

  const alertData = {
    show: false,
    alertMessage: '',
  };
  const [showAlert, setShowAlert] = useState(alertData);

  const closeAlert = () => {
    setShowAlert(alertData);
  };

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
      } else {
        setShowAlert({ show: true, alertMessage: data.error });
        console.log(data.error);
      }
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...LOGIN_CLIENT');
    setLoginState(emptyLoginState);
  };

  return (
    <SimplePaper>
      <FormControl
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch', minWidth: '30ch' },
        }}
      >
        <h2>Login</h2>
        <TextField size="small" type="text" name="username" value={loginState.username} onChange={handleChange} label="Username" />
        <TextField size="small" type="password" name="password" value={loginState.password} onChange={handleChange} label="Password" />
        <Button sx={{ m: 1, px: 4, alignSelf: 'flex-end' }} variant="outlined" onClick={sendToServer}>
          Login
        </Button>
      </FormControl>
      {showAlert.show && <CustomAlert alertMessage={showAlert.alertMessage} {...{ closeAlert }} />}
    </SimplePaper>
  );
}

// export default LoginFormTest;
