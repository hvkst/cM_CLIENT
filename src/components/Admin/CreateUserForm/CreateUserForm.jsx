// import axios from 'axios';
import { useState } from 'react';
import { FormContainer } from './CreateUserForm.style';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import CustomAlert from '../../Main/Alert/Alert';

import moment from 'moment/moment';

import { FormControl, TextField, IconButton } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyNewUserState = {
  username: '',
  password: '',
  project: '',
};

function CreateUserForm({ setAllUsers }) {
  const [newUserState, setNewUserState] = useState(emptyNewUserState);
  const [dateValue, setDateValue] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setNewUserState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const closeAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
  };

  const sendToServer = async (e) => {
    try {
      if (newUserState.username === '' || newUserState.project === '') return;

      const newUserData = {
        username: newUserState.username,
        project: newUserState.project,
        password: newUserState.password,
        duedate: moment(dateValue).format('YYYY-MM-DD'),
      };

      const formBody = newUserData;
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
      console.log(res.ok);
      const data = await res.json();
      if (res.ok) {
        setAllUsers(data.allUsers);
      } else {
        setShowAlert(true);
        setAlertMessage(data.error);
        console.log(data.error);
      }

      console.log('New User created on Clientside');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...newUserForm');
    setNewUserState(emptyNewUserState);
  };

  return (
    <>
      <SimplePaper>
        {showAlert && <CustomAlert alertMessage={alertMessage} {...{ closeAlert }} />}
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

              <IconButton sx={{ marginTop: '23px' }} color="primary" onClick={sendToServer}>
                <CheckBoxIcon />
              </IconButton>
            </div>
          </FormControl>
        </FormContainer>
      </SimplePaper>
    </>
  );
}

export default CreateUserForm;
