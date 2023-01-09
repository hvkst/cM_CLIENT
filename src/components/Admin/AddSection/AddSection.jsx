import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { OptionPaper } from '../../../styles';
import { addSection } from '../../../utils';

const emptySectionState = {
  section: '',
};

function EditSection({ project, setProject }) {
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
export default EditSection;
