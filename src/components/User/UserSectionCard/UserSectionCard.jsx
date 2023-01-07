import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';
import CommentForm from '../../Main/CommentForm/CommentForm';
import CommentDiv from '../../Main/Comments/Comments';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';

export default function UserSectionCard({ section }) {
  return (
    <SimplePaper>
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
    </SimplePaper>
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
