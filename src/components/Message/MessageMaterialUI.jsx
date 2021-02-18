import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: '1',
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default function MessageMaterialUI({ closeFunc, onButtonClick, buttonText, children }) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Alert
        severity="error"
        action={
          <>
            <Button
              className={classes.button}
              onClick={onButtonClick}
              size="small"
              variant="contained"
              color="primary"
            >
              {buttonText}
            </Button>
            <IconButton aria-label="close" color="inherit" size="small" onClick={closeFunc}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </>
        }
      >
        {children}
      </Alert>
    </Container>
  );
}
