import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import { deleteSection, confirmDelete } from '../../../utils';
import UpdateSectionForm from '../UpdateSectionForm/UpdateSectionForm';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import CommentDiv from '../../Main/Comments/Comments';
import CommentForm from '../../Main/CommentForm/CommentForm';
import { SectionContainer, SectionPaper } from './SectionCard.styles';

export default function SectionCard({ section, project, setProject }) {
  return (
    <SectionContainer>
      <SectionPaper elevation={5}>
        <UpdateSectionForm key={section._id} {...{ section, project, setProject }} />
        <CardContent>
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
    </SectionContainer>
  );
}
