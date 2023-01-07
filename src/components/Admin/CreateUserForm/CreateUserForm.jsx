// import axios from 'axios';
import { useState } from 'react';
import { DataInput } from '../../../styles';
// import { BASE_URL } from '../../../consts';
import { FormContainer } from './CreateUserForm.style';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { Button, FormControl, TextField, IconButton } from '@mui/material';

import CheckBoxIcon from '@mui/icons-material/CheckBox';

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
    <SimplePaper>
      <FormContainer>
        <FormControl
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <h2>Create User</h2>
          <div>
            <TextField type="text" name="username" value={newUserState.username} onChange={handleChange} label="Username" />
            <TextField type="password" name="password" value={newUserState.password} label="Password" onChange={handleChange} />
          </div>
          <div>
            <TextField type="text" name="project" value={newUserState.project} label="Project" onChange={handleChange} />
            <TextField
              type="date"
              name="duedate"
              value={newUserState.duedate}
              InputLabelProps={{ shrink: true }}
              label="Due Date"
              onChange={handleChange}
            />
            <IconButton sx={{ marginTop: '26px' }} color="primary" onClick={sendToServer}>
              <CheckBoxIcon />
            </IconButton>
          </div>
        </FormControl>
      </FormContainer>
    </SimplePaper>
  );
}
export default CreateUserForm;
