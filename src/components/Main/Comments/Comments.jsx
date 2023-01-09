import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { commentTime } from '../../../utils';
import { SingleCommentContainer, NameAndTimeContainer, TextContainer } from './Comments.style';

function CommentContainer({ comment }) {
  const { user } = useContext(UserContext);

  const displayName = () => {
    if (user.isAdmin) {
      if (comment.isAdmin) {
        return <p>you</p>;
      } else return <p>{comment.username}</p>;
    }
    if (!user.isAdmin) {
      if (comment.isAdmin) {
        return <p>{comment.username}</p>;
      } else return <p>you</p>;
    }
  };

  return (
    <>
      <SingleCommentContainer sx={{ boxShadow: 1 }} commentIsAdmin={comment.isAdmin}>
        <TextContainer>
          <p>{comment.content}</p>
        </TextContainer>
        <NameAndTimeContainer>
          {displayName()}
          <p>{commentTime(comment.createdAt)}</p>
        </NameAndTimeContainer>
      </SingleCommentContainer>
    </>
  );
}
export default CommentContainer;
