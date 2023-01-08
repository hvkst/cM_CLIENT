import * as React from 'react';
import UpdateSectionForm from '../UpdateSectionForm/UpdateSectionForm';
import CommentDiv from '../../Main/Comments/Comments';
import CommentForm from '../../Main/CommentForm/CommentForm';
import CardContent from '@mui/material/CardContent';
import { InnerSectionContainer, SectionPaper } from './SectionCard.styles';

export default function SectionCard({ section, project, setProject }) {
  return (
    <InnerSectionContainer>
      <SectionPaper elevation={5}>
        <UpdateSectionForm key={section._id} {...{ section, project, setProject }} />
        {/* HERE###################################################### */}
        <CardContent>
          {/* HERE */}
          <p>Comments:</p>
          <div>
            {section.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <CommentDiv {...{ comment }}></CommentDiv>
                </div>
              );
            })}
          </div>
          <CommentForm {...{ section }} />
        </CardContent>
      </SectionPaper>
    </InnerSectionContainer>
  );
}
