import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({ title, children }) {
  return (
    <div>
      <ThisAccordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </ThisAccordion>
    </div>
  );
}

const ThisAccordion = styled(Accordion)`
  width: 200px;
`;
