import { useContext } from 'react';
import UpdateSectionForm from '../../Admin/UpdateSectionForm/UpdateSectionForm';
import CommentDiv from '../Comments/Comments';
import CommentForm from '../CommentForm/CommentForm';
import { CommentsContainer, SectionPaper, DataContainer } from './SectionCard.styles';
import { UserContext } from '../../../context/UserContext';

const checkForContent = (str) => {
  if (str === undefined) return null;
  return <p>{str}</p>;
};

export default function SectionCard({ section, project, setProject }) {
  const { user } = useContext(UserContext);

  return (
    <SectionPaper elevation={5}>
      {user.isAdmin ? (
        <UpdateSectionForm key={section._id} {...{ section, project, setProject }} />
      ) : (
        <DataContainer>
          <h4>{section.title}</h4>
          {checkForContent(section.description)}
          {checkForContent(section.prep)}
          {checkForContent(section.main)}
          {checkForContent(section.final)}
        </DataContainer>
      )}
      <CommentsContainer>
        <p>Comments:</p>
        <div>
          {section.comments.map((comment) => {
            return <CommentDiv key={comment.id} {...{ comment }}></CommentDiv>;
          })}
        </div>
        <CommentForm {...{ section }} />
      </CommentsContainer>
    </SectionPaper>
  );
}
