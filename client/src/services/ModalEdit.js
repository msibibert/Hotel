import React from 'react';
import PropTypes from 'prop-types';
//import classnames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import { renderTextField } from './helpers';

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    overflowY: 'auto'
  },
  form: {
    alignItems: 'center',
    width: '90%',
    padding: '1em'
  },
  btn: {
    width: '100%',
    margin: '1em 0'
  }
};

class ModalEdit extends React.Component {
  render() {
    const { selected, classes, onSubmit, dataInput } = this.props;
    console.log(selected);
    return (
      <div className={classes.form}>
        <br />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={8}>
                {dataInput.map((item, index) =>
                  item.type !== 'select' ? (
                    <Grid item xs={4} key={`key${index}`}>
                      <br />
                      <Field
                        name={item.name}
                        component={renderTextField}
                        label={item.label}
                        type={item.type}
                        helperText={item.helperText || ''}
                        initialValue={selected[item.name]}
                        InputLabelProps={{ shrink: true }}
                        required={item.req !== false ? true : false}
                        fullWidth
                      />
                    </Grid>
                  ) : (
                    'BUTTTTTON'
                  )
                )}
              </Grid>
              <br />
              <Button
                color="primary"
                variant="outlined"
                type="submit"
                className={classes.btn}
              >
                Сохранить
              </Button>
            </form>
          )}
        />
      </div>
    );
  }
}

ModalEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModalEdit);
