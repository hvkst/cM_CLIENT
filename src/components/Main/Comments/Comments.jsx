import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { commentTime } from '../../../utils';
import { CommentContainer, NameAndTimeContainer } from './Comments.style';

function CommentDiv({ comment }) {
  const { user } = useContext(UserContext);
  // console.log(user);
  // console.log(comment.createdAt);
  return (
    <>
      <CommentContainer userIsAdmin={user.isAdmin} commentIsAdmin={comment.isAdmin}>
        <p>{comment.content}</p>
        <NameAndTimeContainer>
          <p>{comment.username}</p>
          <p>{commentTime(comment.createdAt)}</p>
        </NameAndTimeContainer>
      </CommentContainer>
    </>
  );
}
export default CommentDiv;
