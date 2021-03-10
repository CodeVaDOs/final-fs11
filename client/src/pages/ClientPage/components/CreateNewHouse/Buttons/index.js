import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(() => ({
  btn: {
    borderRadius: 0,
    width:'100%'
  },
  btnGroup: {
    display:"flex",
    justifyContent:'space-around',
    width: "100%",
    borderRadius: 0,
  },
  btnActive: {
    backgroundColor: 'blue'
  }
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

export default function CustomizedDividers({ labels }) {
  const [alignment, setAlignment] = React.useState('left');
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const classes = useStyles();
  return (
    <div>
      <StyledToggleButtonGroup
        size="large"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        className={classes.btnGroup}>
        {
          labels.map((item, index) => (
            <ToggleButton
              key={index}
              className={classes.btn}
              value={index}>
              {item}
            </ToggleButton>
          ))
        }
      </StyledToggleButtonGroup>
    </div>
  );
}
