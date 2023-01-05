import { germanDate } from '../../../utils';
import { CommentContainer } from './Comment.style';

function CommentDiv({ comment }) {
  return (
    <>
      <CommentContainer isAdmin={comment.isAdmin}>
        <p>{comment.content}</p>
        <p id="date">{germanDate(comment.createdAt)}</p>
      </CommentContainer>
    </>
  );
}
export default CommentDiv;
