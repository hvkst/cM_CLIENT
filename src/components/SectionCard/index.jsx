import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { deleteSection } from '../../utils';
import SimpleAccordion from '../SimpleAccordion';
import UpdateSectionForm from '../UpdateSectionForm';

export default function SectionCard({ section, project, setProject }) {
  // const projectLink = `/adminbackend/user/${user._id}`;

  return (
    <UCard>
      <CardContent>
        <Typography variant="h5">{section.title}</Typography>
        <Typography variant="h6">{section.description}</Typography>
        <Typography variant="h6">{section.prep}</Typography>
        <Typography variant="h6">{section.main}</Typography>
        <Typography variant="h6">{section.final}</Typography>
      </CardContent>
      <CardActions>
        {/* <MyLink to={projectLink} size="small">
          <Button variant="outlined" size="small">
            {user.projects[0].title}
          </Button>
        </MyLink> */}
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            deleteSection(section, project, setProject);
          }}
        >
          X
        </Button>
        <SimpleAccordion>
          <UpdateSectionForm key={section._id} {...{ section, project, setProject }} />
        </SimpleAccordion>
      </CardActions>
    </UCard>
  );
}

const UCard = styled(Card)`
  width: fit-content;
  margin: 10px;
`;

// const MyLink = styled(Link)`
//   text-decoration: none;
// `;
