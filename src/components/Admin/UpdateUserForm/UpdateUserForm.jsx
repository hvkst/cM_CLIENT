import { TextField, IconButton, FormControl } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { useState } from 'react';
import { updateUser } from '../../../utils';
import moment from 'moment/moment';
import { FormContainer } from './UpdateUserForm.style';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function UpdateUserForm({ fullUserData, setFullUserdata, setProject }) {
  const defaultState = {
    username: fullUserData.username,
    project: fullUserData.projects[0].title,
    dueDate: fullUserData.projects[0].dueDate,
    userId: fullUserData._id,
  };

  const timeLeft = new moment().to(moment(fullUserData.projects[0].dueDate), true);

  const [state, setState] = useState(defaultState);
  const [dateValue, setDateValue] = useState(fullUserData.projects[0].dueDate);

  const handleChange = (event) => {
    setState((old) => {
      let newValue = event.target.value;

      return { ...old, [event.target.name]: newValue };
    });
  };

  const userDataUpdate = {
    username: state.username,
    project: state.project,
    dueDate: moment(dateValue).format('YYYY-MM-DD'),
    userId: state.userId,
    projectId: fullUserData.projects[0]._id,
  };

  const handleClick = (e) => {
    // e.preventDefault();
    updateUser(userDataUpdate, setFullUserdata, setProject);
  };

  return (
    <>
      <FormContainer timeLeft={timeLeft}>
        <FormControl
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <TextField
            inputProps={{ style: { fontSize: 25, lineHeight: 1.2 } }}
            variant="standard"
            onChange={handleChange}
            value={state.username}
            id="Username"
            name="username"
          />
          <TextField variant="standard" onChange={handleChange} value={state.project} id="Username" name="project" />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Due Date"
              name="dueDate"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField variant="standard" {...params} />}
            />
          </LocalizationProvider>
          <div>
            <span className="timeLeftSpan">{timeLeft} left.</span>
            <IconButton color="primary" onClick={handleClick}>
              <CheckBoxIcon />
            </IconButton>
          </div>
        </FormControl>
      </FormContainer>
    </>
  );
}

export default UpdateUserForm;
