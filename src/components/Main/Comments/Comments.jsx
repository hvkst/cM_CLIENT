import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { commentTime } from '../../../utils';
import { SingleCommentContainer, NameAndTimeContainer } from './Comments.style';

function CommentContainer({ comment }) {
  const { user } = useContext(UserContext);
  return (
    <>
      <SingleCommentContainer userIsAdmin={user.isAdmin} commentIsAdmin={comment.isAdmin}>
        <p>{comment.content}</p>
        <NameAndTimeContainer>
          <p>{comment.username}</p>
          <p>{commentTime(comment.createdAt)}</p>
        </NameAndTimeContainer>
      </SingleCommentContainer>
    </>
  );
}
export default CommentContainer;
