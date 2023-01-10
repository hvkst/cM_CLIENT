import { useState } from 'react';

import { TextField, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { addSection } from '../../../utils';
import { OptionPaper } from '../../../styles';

const emptySectionState = {
  section: '',
};

export default function AddSection({ project, setProject }) {
  const [newSectionState, setNewSectionState] = useState(emptySectionState);

  const handleChange = (e) => {
    setNewSectionState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    addSection(newSectionState, project, setProject);
  };

  return (
    <OptionPaper>
      <TextField variant="standard" type="text" name="section" value={newSectionState.section} placeholder="new section" onChange={handleChange} />
      <IconButton color="success" onClick={handleClick}>
        <AddCircleIcon />
      </IconButton>
    </OptionPaper>
  );
}
