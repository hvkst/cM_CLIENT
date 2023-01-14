import { useState } from 'react';
import { updateUser } from '../../../utils';

import moment from 'moment/moment';
import { TextField, IconButton, FormControl, Button } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { ControlsContainer } from './UpdateUserForm.style';

export default function UpdateUserForm({ fullUserData, setFullUserdata, setProject, setShowDeleteOption, setShowAddSectionOption }) {
  const [dateValue, setDateValue] = useState(fullUserData.projects[0].dueDate);
  const [changed, setChanged] = useState(false);

  const defaultState = {
    username: fullUserData.username,
    project: fullUserData.projects[0].title,
    dueDate: fullUserData.projects[0].dueDate,
    userId: fullUserData._id,
  };
  const [state, setState] = useState(defaultState);

  const timeLeft = new moment().to(moment(fullUserData.projects[0].dueDate), true);

  const handleChange = (event) => {
    setChanged(true);
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
    updateUser(userDataUpdate, setFullUserdata, setProject);
    setChanged(false);
  };

  return (
    <SimplePaper>
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
              setChanged(true);
              setDateValue(newValue);
            }}
            renderInput={(params) => <TextField variant="standard" {...params} />}
          />
        </LocalizationProvider>
        <ControlsContainer timeLeft={timeLeft}>
          <div>
            <span className="timeLeftSpan">{timeLeft} left.</span>
            {changed ? (
              <Button sx={{ m: 1 }} color="primary" size="small" onClick={handleClick}>
                save
              </Button>
            ) : (
              <Button sx={{ m: 1 }} variant="outlined" disabled color="primary" size="small" onClick={handleClick}>
                save
              </Button>
            )}
          </div>
          <div>
            <Button
              sx={{ m: 1 }}
              color="warning"
              size="small"
              startIcon={<DeleteForeverIcon />}
              onClick={() => {
                setShowDeleteOption((curr) => !curr);
              }}
            >
              User
            </Button>
            <Button
              sx={{ m: 1 }}
              color="success"
              size="small"
              startIcon={<AddCircleIcon />}
              onClick={() => {
                setShowAddSectionOption((curr) => !curr);
              }}
            >
              Section
            </Button>
          </div>
        </ControlsContainer>
      </FormControl>
    </SimplePaper>
  );
}
