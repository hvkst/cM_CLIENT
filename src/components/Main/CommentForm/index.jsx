import { useContext, useState } from 'react';
import { ProjectContext } from '../../../context/ProjectContext';
import { UserContext } from '../../../context/UserContext';

// import { BASE_URL } from '../../../consts';
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
      <input type="text" name="content" value={commentState.content} onChange={handleChange} placeholder="Comment" />
      <button onClick={sendToServer}>S</button>
    </>
  );
}
export default CommentForm;
