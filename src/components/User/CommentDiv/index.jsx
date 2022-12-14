import { styled } from '@mui/system';
import { shorterTime } from '../../../utils';

function CommentDiv({ comment }) {
  return (
    <>
      <Cdiv>
        <p>{comment.content}</p>
        <p id="date">{shorterTime(comment.createdAt)}</p>
        {/* <p id="username">Example User</p> */}
        {/* <p>{comment.createdAt}</p> */}
      </Cdiv>
    </>
  );
}
export default CommentDiv;

const Cdiv = styled('div')`
  display: flex;
  width: 90%;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin: 2px;
  & p {
    margin: 1px;
  }
  & #date {
    font-size: 10px;
    align-self: flex-end;
  }
`;
