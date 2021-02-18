import React, { useMemo } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  button: {
    flex: '1',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const isSameProps = (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
};
const AddFormMaterialUI = React.memo(({ addFunc, title, fields }) => {
  const classes = useStyles();
  const inputs = useMemo(
    () =>
      fields.map((field) => (
        <Field
          key={field}
          name={field}
          render={({ input, meta }) => (
            <TextField
              {...input}
              error={meta.error && meta.touched}
              label={`${title} ${field}`}
              helperText={meta.error}
            />
          )}
        />
      )),
    [[...fields]],
  );

  return (
    <Form
      onSubmit={addFunc}
      validate={(values) => {
        let errors = {};
        if (values.diameter && isNaN(Number(values.diameter))) {
          errors.diameter = 'Should be number';
        }
        if (values.height && isNaN(Number(values.height))) {
          errors.height = 'Should be number';
        }
        if (values.mass && isNaN(Number(values.mass))) {
          errors.mass = 'Should be number';
        }
        Object.keys(values).forEach((value) => {
          if (values[value].length < 3) {
            errors[value] = 'Should be at least 3 symbols';
          }
        });
        return errors;
      }}
      render={({ handleSubmit, pristine, form }) => {
        const submitFunc = (values) => {
          handleSubmit(values);
          form.reset();
        };
        return (
          <Container
            className={classes.formContainer}
            component="form"
            onSubmit={submitFunc}
            maxWidth="xs"
          >
            <Typography variant="h4" component="h1">
              Add {title}:
            </Typography>
            {inputs}
            <Box className={classes.buttonsContainer}>
              <Button
                type="submit"
                disabled={pristine}
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                className={classes.button}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                disabled={pristine}
                onClick={form.reset}
                className={classes.button}
              >
                Reset
              </Button>
            </Box>
          </Container>
        );
      }}
    />
  );
}, isSameProps);

AddFormMaterialUI.propTypes = {
  addFunc: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddFormMaterialUI;
