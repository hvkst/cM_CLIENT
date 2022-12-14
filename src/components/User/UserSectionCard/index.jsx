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
        <Udiv variant="h5">{section.title}</Udiv>
        <Udiv>
          {/* <p>Description:</p> */}
          <p>{section.description}</p>
        </Udiv>
        <Udiv>
          {/* <p>Preparation:</p> */}
          <p> {section.prep}</p>
        </Udiv>
        <Udiv>
          {/* <p>Main: </p> */}
          <p>{section.main}</p>
        </Udiv>
        <Udiv>
          {/* <p>Final</p> */}
          <p>{section.final}</p>
        </Udiv>
        <p>Comments:</p>
        {/* <Udiv> */}
        <div>
          {section.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <CommentDiv {...{ comment }}></CommentDiv>
              </div>
            );
          })}
        </div>
        {/* </Udiv> */}
        <Button variant="outlined" size="small">
          upload files / data here
        </Button>{' '}
        <br />
        <Button variant="outlined" size="small">
          chat / comment here
        </Button>{' '}
        <br />
        <CommentForm {...{ section }} />
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
`;

const Li = styled('li')`
  text-decoration: none;
  list-style-type: none;
  margin: 0;
`;
