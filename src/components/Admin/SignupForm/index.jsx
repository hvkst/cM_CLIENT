// import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../../../consts';
import { UserContext } from '../../../context/UserContext';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptySignupState = {
  username: '',
  password: '',
};

function SignupForm() {
  const [signupState, setSignupState] = useState(emptySignupState);
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const handleChange = (e) => {
    setSignupState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async () => {
    try {
      const formBody = signupState;
      console.log(formBody);

      const url = BASE_URL + '/auth/signup';

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formBody),
      });
      const data = await res.json();
      console.log('data:', data);

      loginUser(data.user);
      console.log('Signup success');

      navigate('/login');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...SignupForm');
    setSignupState(emptySignupState);
  };

  return (
    <>
      <h2>Signup Form</h2>
      <input type="text" name="username" value={signupState.username} onChange={handleChange} placeholder="Enter your name here" />
      <input type="password" name="password" value={signupState.password} placeholder="Enter your password here" onChange={handleChange} />

      <button onClick={sendToServer}>Signup</button>
    </>
  );
}

export default SignupForm;
