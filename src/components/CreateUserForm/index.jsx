// import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../consts';

const emptyNewUserState = {
  username: '',
  password: '',
  project: '',
  duedate: '',
};

// const BASE_URL = process.env.REACT_APP_BASE_URL;

function CreateUserForm({ setAllUsers }) {
  const [newUserState, setNewUserState] = useState(emptyNewUserState);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUserState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async () => {
    try {
      const formBody = newUserState;
      console.log(formBody);

      const url = BASE_URL + '/admin/user/new';

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
      setAllUsers(data.allUsers);
      // Fetch all user again

      console.log('New User created on Clientside');

      // navigate('/adminbackend');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...newUserForm');
    setNewUserState(emptyNewUserState);
  };

  return (
    <>
      <h2>Create User</h2>
      <input type="text" name="username" value={newUserState.username} onChange={handleChange} placeholder="User" />
      <input type="password" name="password" value={newUserState.password} placeholder="Password" onChange={handleChange} />
      <input type="text" name="project" value={newUserState.project} placeholder="Project" onChange={handleChange} />
      <input type="date" name="duedate" value={newUserState.duedate} placeholder="Due Date" onChange={handleChange} />

      <button onClick={sendToServer}>Create</button>
    </>
  );
}
export default CreateUserForm;
