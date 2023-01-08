import * as React from 'react';
import CommentForm from '../../Main/CommentForm/CommentForm';
import CommentContainer from '../../Main/Comments/Comments';
import { Paper } from '@mui/material';
import { InnerSectionContainer, DataContainer, CommentsContainer } from './UserSectionCard.style';

const checkForContent = (str) => {
  if (str === undefined) return null;
  return <p>{str}</p>;
};

export default function UserSectionCard({ section }) {
  return (
    <Paper sx={{ padding: '10px', marginRight: '20px', marginBottom: '20px' }}>
      <InnerSectionContainer>
        <h4>{section.title}</h4>
        <DataContainer>
          {checkForContent(section.description)}
          {checkForContent(section.prep)}
          {checkForContent(section.main)}
          {checkForContent(section.final)}
        </DataContainer>
        <CommentsContainer>
          <p>Comments:</p>
          {section.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <CommentContainer {...{ comment }}></CommentContainer>
              </div>
            );
          })}
        </CommentsContainer>
        <CommentForm {...{ section }} />
      </InnerSectionContainer>
    </Paper>
  );
}
