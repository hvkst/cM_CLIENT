import { useContext, useState } from 'react';
import { ErrorContext } from '../../../context/ErrorContext';

import moment from 'moment/moment';

import { FormControl, TextField, Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { FormContainer } from './CreateUserForm.style';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyNewUserState = {
  username: '',
  password: '',
  project: '',
};

function CreateUserForm({ setAllUsers }) {
  const [newUserState, setNewUserState] = useState(emptyNewUserState);
  const [dateValue, setDateValue] = useState();
  const [changed, setChanged] = useState(false);

  const { setError, setErrorMessage } = useContext(ErrorContext);

  const handleChange = (e) => {
    setChanged(true);
    setNewUserState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const newUserData = {
    username: newUserState.username,
    project: newUserState.project,
    password: newUserState.password,
    duedate: moment(dateValue).format('YYYY-MM-DD'),
  };

  const sendToServer = async (e) => {
    try {
      if (newUserState.username === '' || newUserState.project === '') return;

      const body = newUserData;
      // console.log(body);

      const url = BASE_URL + '/admin/user/new';

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(body),
      });
      // console.log('res.ok', res.ok);
      const data = await res.json();
      if (res.ok) {
        setAllUsers(data.allUsers);
      } else {
        setError(true);
        setErrorMessage(data.error);
        console.log(data.error);
      }

      console.log('New User created on Clientside');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...newUserForm');
    setNewUserState(emptyNewUserState);
    setChanged(false);
  };

  return (
    <>
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
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  label="Due Date"
                  name="dueDate"
                  value={dateValue}
                  onChange={(newValue) => {
                    setDateValue(newValue);
                  }}
                  renderInput={(params) => <TextField sx={{ width: '32%' }} variant="standard" {...params} />}
                />
              </LocalizationProvider>

              {changed ? (
                <Button sx={{ m: 1, mt: 2 }} color="primary" variant="outlined" onClick={sendToServer}>
                  save
                </Button>
              ) : (
                <Button sx={{ m: 1, mt: 2 }} variant="outlined" disabled color="primary" onClick={sendToServer}>
                  save
                </Button>
              )}
            </div>
          </FormControl>
        </FormContainer>
      </SimplePaper>
    </>
  );
}

export default CreateUserForm;
