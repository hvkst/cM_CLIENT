// import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';

const emptyLoginState = {
  username: '',
  password: '',
};

// const BASE_URL = process.env.REACT_APP_BASE_URL;

function LoginForm() {
  const [loginState, setLoginState] = useState(emptyLoginState);
  const navigate = useNavigate();
  const { loginUser, user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setLoginState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async () => {
    try {
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

      navigate('/backendadmin');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...');
    setLoginState(emptyLoginState);
  };

  return (
    <>
      <h2>Login Form</h2>
      <input type="text" name="username" value={loginState.username} onChange={handleChange} placeholder="Enter your name here" />
      <input type="password" name="password" value={loginState.password} placeholder="Enter your password here" onChange={handleChange} />

      <button onClick={sendToServer}>Signup</button>
    </>
  );
}

export default LoginForm;
