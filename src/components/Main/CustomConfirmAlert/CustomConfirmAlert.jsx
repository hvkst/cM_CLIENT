import { Button } from '@mui/material';
import { confirmAlert } from 'react-confirm-alert'; // Import
import styled from 'styled-components';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';

export default function confirmDelete(callback, arg1, arg2, arg3) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <SimplePaper>
          <DeleteContainer className="custom-ui">
            <h1>Confirm to DELETE</h1>
            <p>Are you sure to do this?</p>
            <Button sx={{ mx: 5, mt: 2 }} color="success" variant="contained" onClick={onClose}>
              No
            </Button>
            <Button
              sx={{ mx: 5, mt: 2 }}
              variant="contained"
              color="error"
              onClick={() => {
                callback(arg1, arg2, arg3);
                onClose();
              }}
            >
              Yes!
            </Button>
          </DeleteContainer>
        </SimplePaper>
      );
    },
  });
}

const DeleteContainer = styled.div`
  &.custom-ui {
    width: 400px;
    height: 200px;
    text-align: center;
  }
`;
