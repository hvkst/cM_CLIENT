import { useState, useContext } from 'react';
import { ProjectContext } from '../../../context/ProjectContext';
import { updateSection, deleteSection } from '../../../utils';

import { FormControl, TextField, IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import confirmDelete from '../../Main/CustomConfirmAlert/CustomConfirmAlert';
import { IconContainer, FormContainer } from './UpdateSectionForm.style';

export default function UpdateSectionForm({ section }) {
  const { project, setProject } = useContext(ProjectContext);

  const defaultState = {
    title: section.title,
    description: section.description,
    prep: section.prep,
    main: section.main,
    final: section.final,
  };

  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setState((old) => {
      let newValue = event.target.value;

      return { ...old, [event.target.name]: newValue };
    });
  };

  const handleClick = (e) => {
    updateSection(state, section, project, setProject);
  };

  return (
    <>
      <FormContainer>
        <FormControl>
          <TextField
            inputProps={{ style: { fontSize: 25, lineHeight: 1.2 } }}
            sx={{ m: 2 }}
            multiline
            variant="standard"
            onChange={handleChange}
            value={state.title}
            id="title"
            name="title"
          />
          <TextField
            multiline
            variant="standard"
            onChange={handleChange}
            sx={{ m: 1 }}
            value={state.description}
            name="description"
            label="Description"
          />
          <TextField multiline variant="standard" onChange={handleChange} sx={{ m: 1 }} value={state.prep} name="prep" label="Prep" />
          <TextField multiline variant="standard" onChange={handleChange} sx={{ m: 1 }} value={state.main} name="main" label="Main" />
          <TextField multiline variant="standard" onChange={handleChange} sx={{ m: 1 }} value={state.final} name="final" label="Final" />
        </FormControl>
        <IconContainer>
          <IconButton
            color="primary"
            onClick={() => {
              confirmDelete(deleteSection, section, project, setProject);
            }}
          >
            <DeleteForeverIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleClick}>
            <CheckBoxIcon />
          </IconButton>
        </IconContainer>
      </FormContainer>
    </>
  );
}
