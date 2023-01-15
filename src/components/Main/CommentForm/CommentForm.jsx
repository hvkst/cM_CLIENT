import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { ProjectContext } from '../../../context/ProjectContext';
import { Box, Button, TextField } from '@mui/material';
import styled from 'styled-components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const emptyCommentState = {
  content: '',
};

export default function CommentForm({ section }) {
  const [commentState, setCommentState] = useState('');
  const { project, setProject } = useContext(ProjectContext);
  const { user } = useContext(UserContext);
  const [changed, setChanged] = useState(false);

  const handleChange = (e) => {
    setChanged(true);
    setCommentState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const sendToServer = async (e) => {
    try {
      if (commentState.content === '' || commentState.content === undefined) return;
      const formBody = { ...commentState, projectId: project._id, sectionId: section._id, UserId: user.id };
      // console.log(formBody);

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
      // console.log('data:', data);
      setProject(data.currentProject[0]);
      // console.log('Comment Saved on Client', data);
    } catch (err) {
      console.error(err);
    }
    // console.log('We reach here...CommentForm');
    setCommentState(emptyCommentState);
    setChanged(false);
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
          <TextField
            multiline
            variant="standard"
            type="text"
            name="content"
            value={commentState.content}
            onChange={handleChange}
            placeholder="Comment"
          />
          {changed ? (
            <Button sx={{ m: 1 }} color="primary" size="small" onClick={sendToServer}>
              send
            </Button>
          ) : (
            <Button sx={{ m: 1 }} variant="outlined" disabled color="primary" size="small" onClick={sendToServer}>
              send
            </Button>
          )}
        </CommentFormContainer>
      </Box>
    </>
  );
}

const CommentFormContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
