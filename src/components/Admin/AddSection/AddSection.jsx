// import axios from 'axios';
import { useState } from 'react';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { Button, TextField, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from 'styled-components';
import { OptionPaper } from '../../../styles';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptySectionState = {
  section: '',
};

function EditSection({ project, setProject }) {
  const [newSectionState, setNewSectionState] = useState(emptySectionState);

  const handleChange = (e) => {
    setNewSectionState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async () => {
    try {
      if (newSectionState.section === '') return;
      const formBody = { ...newSectionState, projectId: project._id };
      console.log(formBody);

      const url = `${BASE_URL}/admin/user/section/add`;
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
      setProject(data.project);
      console.log('Project edited on Client');
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here... AddSectionForm');
    setNewSectionState(emptySectionState);
  };

  return (
    <OptionPaper>
      <TextField variant="standard" type="text" name="section" value={newSectionState.section} placeholder="new section" onChange={handleChange} />
      <IconButton color="success" onClick={sendToServer}>
        <AddCircleIcon />
      </IconButton>
    </OptionPaper>
  );
}
export default EditSection;
