// import axios from 'axios';
import { Button } from '@mui/material';
import { useState } from 'react';
import { DataInput } from '../../../styles';
// import { BASE_URL } from '../../../consts'; //FIX THIS!

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptySectionState = {
  section: '',
};

function EditSection({ project, setProject }) {
  const [sectionState, setSectionState] = useState(emptySectionState);

  const handleChange = (e) => {
    setSectionState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async () => {
    try {
      const formBody = { ...sectionState, projectId: project._id };
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

      // navigate();
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here... AddSectionForm');
    setSectionState(emptySectionState);
  };

  return (
    <>
      <DataInput type="text" name="section" value={sectionState.section} placeholder="new section" onChange={handleChange} />

      <Button onClick={sendToServer}>Add</Button>
    </>
  );
}
export default EditSection;
