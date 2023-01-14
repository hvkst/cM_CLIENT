import { useState } from 'react';

import { TextField, Button } from '@mui/material';

import { addSection } from '../../../utils';
import { OptionPaper } from '../../../styles';

const emptySectionState = {
  section: '',
};

export default function AddSection({ project, setProject }) {
  const [newSectionState, setNewSectionState] = useState(emptySectionState);
  const [changed, setChanged] = useState(false);

  const handleChange = (e) => {
    setChanged(true);

    setNewSectionState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    addSection(newSectionState, project, setProject);
  };

  return (
    <OptionPaper>
      <TextField variant="standard" type="text" name="section" value={newSectionState.section} placeholder="new section" onChange={handleChange} />
      {changed ? (
        <Button sx={{ m: 1 }} color="primary" size="small" onClick={handleClick}>
          save
        </Button>
      ) : (
        <Button sx={{ m: 1 }} variant="outlined" disabled color="primary" size="small" onClick={handleClick}>
          save
        </Button>
      )}
    </OptionPaper>
  );
}
