import { Box, Button, IconButton, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ProjectContext } from '../../../context/ProjectContext';
import { UserContext } from '../../../context/UserContext';
import SendIcon from '@mui/icons-material/Send'; // import { BASE_URL } from '../../../consts';
import styled from 'styled-components';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyCommentState = {
  content: '',
};

function CommentForm({ section }) {
  const [commentState, setCommentState] = useState('');
  const { project, setProject } = useContext(ProjectContext);
  const { user } = useContext(UserContext);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setCommentState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async (e) => {
    e.preventDefault(); // ?

    try {
      if (commentState.content === '') return;
      const formBody = { ...commentState, projectId: project._id, sectionId: section._id, UserId: user.id };
      console.log(formBody);

      const url = BASE_URL + '/comment/new';

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
      setProject(data.currentProject[0]);
      console.log('Comment Saved on Client', data);
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...CommentForm');
    setCommentState(emptyCommentState);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <CommentFormContainer>
          <TextField multiline size="small" type="text" name="content" value={commentState.content} onChange={handleChange} placeholder="Comment" />
          <IconButton color="primary" onClick={sendToServer}>
            <SendIcon />
          </IconButton>
        </CommentFormContainer>
      </Box>
    </>
  );
}
export default CommentForm;

const CommentFormContainer = styled.div`
  display: flex;
  align-items: center;
`;
