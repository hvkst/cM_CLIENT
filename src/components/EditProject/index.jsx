// import axios from 'axios';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../consts';

const emptySectionState = {
  section: '',
};
function EditSection({ project }) {
  const [sectionState, setSectionState] = useState(emptySectionState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSectionState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async () => {
    try {
      const formBody = sectionState;
      console.log(formBody);

      const url = `${BASE_URL}/admin/addsection/${project._id}`;
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

      console.log('Project edited on Client');

      navigate();
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here... AddSectionForm');
    setSectionState(emptySectionState);
  };

  return (
    <>
      <h2>{project.title}</h2>
      <input type="text" name="section" value={sectionState.section} placeholder="section" onChange={handleChange} />

      <Button onClick={sendToServer}>Add</Button>
    </>
  );
}
export default EditSection;
