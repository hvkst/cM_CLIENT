import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { deleteSection } from '../../../utils';
import { confirmDelete } from '../../../utils';
import SimpleAccordion from '../../Main/SimpleAccordion';
import UpdateSectionForm from '../UpdateSectionForm';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

export default function SectionCard({ section, project, setProject }) {
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
        <SimpleAccordion title="edit">
          <UpdateSectionForm key={section._id} {...{ section, project, setProject }} />
        </SimpleAccordion>
        <IconButton
          color="primary"
          onClick={() => {
            confirmDelete(deleteSection, section, project, setProject);
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
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
