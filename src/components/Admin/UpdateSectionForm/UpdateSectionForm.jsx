import { useState, useContext } from 'react';
import { ProjectContext } from '../../../context/ProjectContext';
import { updateSection, deleteSection } from '../../../utils';

import { FormControl, TextField, IconButton, Button } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import confirmDelete from '../../Main/CustomConfirmAlert/CustomConfirmAlert';
import { IconContainer, FormContainer } from './UpdateSectionForm.style';

export default function UpdateSectionForm({ section }) {
  const { project, setProject } = useContext(ProjectContext);
  const [changed, setChanged] = useState(false);

  const defaultState = {
    title: section.title,
    description: section.description,
    prep: section.prep,
    main: section.main,
    final: section.final,
  };

  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setChanged(true);

    setState((old) => {
      let newValue = event.target.value;

      return { ...old, [event.target.name]: newValue };
    });
  };

  const handleClick = (e) => {
    updateSection(state, section, project, setProject);
    setChanged(false);
  };

  return (
    <>
      <FormContainer>
        <FormControl>
          <TextField
            inputProps={{ style: { fontSize: 25, lineHeight: 1.2, disableUnderline: true } }}
            InputProps={{ disableUnderline: true }}
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
          <Button
            sx={{ m: 1 }}
            color="warning"
            size="small"
            startIcon={<DeleteForeverIcon />}
            onClick={() => {
              confirmDelete(deleteSection, section, project, setProject);
            }}
          >
            Section
          </Button>
          {changed ? (
            <Button sx={{ m: 1 }} color="primary" size="small" onClick={handleClick}>
              save
            </Button>
          ) : (
            <Button sx={{ m: 1 }} variant="outlined" disabled color="primary" size="small" onClick={handleClick}>
              save
            </Button>
          )}
        </IconContainer>
      </FormContainer>
    </>
  );
}
