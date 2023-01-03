// import axios from 'axios';
import { useState } from 'react';
import { DataInput } from '../../../styles';
// import { BASE_URL } from '../../../consts';
import { FormContainer, Button } from './CreateUserForm.style';

const emptyNewUserState = {
  username: '',
  password: '',
  project: '',
  duedate: '',
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

function CreateUserForm({ setAllUsers }) {
  const [newUserState, setNewUserState] = useState(emptyNewUserState);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUserState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async (e) => {
    e.preventDefault(); // ?

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

      console.log('New User created on Clientside');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...newUserForm');
    setNewUserState(emptyNewUserState);
  };

  return (
    <>
      <h2>Create User</h2>
      <FormContainer>
        <DataInput type="text" name="username" value={newUserState.username} onChange={handleChange} placeholder="User" />
        <DataInput type="password" name="password" value={newUserState.password} placeholder="Password" onChange={handleChange} />
      </FormContainer>
      <FormContainer>
        <DataInput type="text" name="project" value={newUserState.project} placeholder="Project" onChange={handleChange} />
        <DataInput type="date" name="duedate" value={newUserState.duedate} placeholder="Due Date" onChange={handleChange} />
        <Button onClick={sendToServer}>Create</Button>
      </FormContainer>
    </>
  );
}
export default CreateUserForm;
