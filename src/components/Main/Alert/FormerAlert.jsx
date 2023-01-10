import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FormerAlert({ closeAlert, alertMessage }) {
  const nicerMessage = () => {
    if (alertMessage.includes('E11000')) return 'Username already in use.';
    return alertMessage;
  };

  return (
    <Stack spacing={2}>
      <Alert severity="error" onClose={closeAlert}>
        {nicerMessage()}
      </Alert>
    </Stack>
  );
}
