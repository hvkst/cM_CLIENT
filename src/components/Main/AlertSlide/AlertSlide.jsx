import * as React from 'react';
import Alert from '@mui/material/Alert';
import { ErrorContext } from '../../../context/ErrorContext';
import { Fade, Slide } from '@mui/material';

export default function AlertSlide({ severity }) {
  const { setError, errorMessage, setErrorMessage } = React.useContext(ErrorContext);
  const [showThis, setShowThis] = React.useState(false);

  React.useEffect(() => {
    setShowThis(true);
  }, []);

  React.useEffect(() => {
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
    <Slide sx={{ position: 'fixed', top: 5, left: 5, minWidth: '50vw' }} timeout={500} direction="down" in={showThis} mountOnEnter>
      <Alert severity={severity} onClose={handleChange}>
        {nicerMessage(errorMessage)}
      </Alert>
    </Slide>
  );
}
