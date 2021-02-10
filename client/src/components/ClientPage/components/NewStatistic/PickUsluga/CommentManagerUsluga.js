import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
      marginLeft: theme.spacing(1),

    },
  },
}));

export default function CommentManagerUsluga() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" placeholder={'Коментар...'} variant="outlined"/>
    </form>
  );
}
