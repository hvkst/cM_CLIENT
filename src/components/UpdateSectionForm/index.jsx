import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import { useState } from 'react';
import { updateSection } from '../../utils';

function UpdateSectionForm({ section, project, setProject }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSection(state, section, project, setProject);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: 'flex',
          justifyContent: 'center',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <FormControl>
            <TextField onChange={handleChange} value={state.title} id="title" name="title" label="Title" />
            <TextField onChange={handleChange} value={state.description} name="description" label="Description" />
            <TextField onChange={handleChange} value={state.prep} name="prep" label="Prep" />
            <TextField onChange={handleChange} value={state.main} name="main" label="Main" />
            <TextField onChange={handleChange} value={state.final} name="final" label="Final" />
            <Button type="submit" variant="outlined">
              save
            </Button>
          </FormControl>
        </div>
      </Box>
    </div>
  );
}

export default UpdateSectionForm;
