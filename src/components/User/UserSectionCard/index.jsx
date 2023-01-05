import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import CommentForm from '../../Main/CommentForm';
import CommentDiv from '../CommentDiv';

export default function UserSectionCard({ section }) {
  return (
    <UCard>
      <CardContent>
        <h4>{section.title}</h4>
        <Udiv>
          <p>- {section.description}</p>
          <p>- {section.prep}</p>
          <p>- {section.main}</p>
          <p>- {section.final}</p>
        </Udiv>

        <p>Comments:</p>
        <div>
          {section.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <CommentDiv {...{ comment }}></CommentDiv>
              </div>
            );
          })}
        </div>
        <CommentForm {...{ section }} />
        <br />
      </CardContent>
    </UCard>
  );
}

const UCard = styled(Card)`
  width: fit-content;
  margin: 10px;
`;

const Udiv = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Li = styled('li')`
  text-decoration: none;
  list-style-type: none;
  margin: 0;
`;
