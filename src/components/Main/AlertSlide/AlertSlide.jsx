import { useState, useContext, useEffect } from 'react';
import { ErrorContext } from '../../../context/ErrorContext';

import Alert from '@mui/material/Alert';
import { Slide } from '@mui/material';

export default function AlertSlide({ severity }) {
  // This broke after deployment most likely because error handling on server:
  // I think my error500 response loses it´s cors header and with that no error or message arrives here...
  const { setError, errorMessage, setErrorMessage } = useContext(ErrorContext);
  const [showThis, setShowThis] = useState(false);

  useEffect(() => {
    setShowThis(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowThis(false);
      setTimeout(() => {
        setError(false);
        setErrorMessage('Context Error Message');
      }, '1000');
    }, '3000');
  });

  const nicerMessage = (message) => {
    return message.includes('E11000') ? 'Username already in use.' : message;
  };

  const handleChange = () => {
    setShowThis(false);
    setTimeout(() => {
      setError(false);
      setErrorMessage('Context Error Message');
    }, '1000');
  };

  return (
    <Slide sx={{ position: 'fixed', top: 5, left: 5, minWidth: '30vw' }} timeout={500} direction="down" in={showThis} mountOnEnter>
      <Alert severity={severity} onClose={handleChange}>
        {nicerMessage(errorMessage)}
      </Alert>
    </Slide>
  );
}
