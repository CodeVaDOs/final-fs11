import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const BlueCheckbox = withStyles({
  root: {
    margin: 5,
    borderRadius: 0,
    border: 0,
    background: "rgb(4,58,167)",
    color: "rgb(4,58,167)",
    '&$checked': {
      background: "#4cff00",
      color: "rgb(4,58,167)",
    },

  },
  checked: {
    width: 20,
    height: 20,
  },
})((props) => <Checkbox color="default" {...props} />);
const LightBlueCheckbox = withStyles({
  root: {
    margin: 5,
    borderRadius: 0,
    border: 0,
    background: "#1E87F033",
    color: "#1E87F033",
    '&$checked': {
      color: "#1E87F033",
      width: 20,
      height: 20,
    },
  },
  checked: {
    width: 0,
    height: 0,
  },
})((props) => <Checkbox color="default" {...props} />);
const RedCheckbox = withStyles({
  root: {
    margin: 5,
    borderRadius: 0,
    border: 0,
    background: "rgb(207,54,97)",
    color: "rgb(207,54,97)",
    '&$checked': {
      background: "#4cff00",
      color: "rgb(207,54,97)",
    },
  },
  checked: {
    width: 20,
    height: 20,
  },
})((props) => <Checkbox color="default" {...props} />);
const YellowCheckbox = withStyles({
  root: {
    margin: 5,
    borderRadius: 0,
    border: 0,
    background: "rgb(234,221,137)",
    color: "rgb(234,221,137)",
    '&$checked': {
      background: "#4cff00",
      color: "rgb(234,221,137)",
    },
  },
  checked: {
    width: 20,
    height: 20,
  },
})((props) => <Checkbox color="default" {...props} />);
const BlackCheckbox = withStyles({
  root: {
    margin: 5,

    borderRadius: 0,
    border: 0,
    background: "rgb(52,52,52)",
    color: "rgb(52,52,52)",
    '&$checked': {
      background: "#4cff00",

      color: "rgb(52,52,52)",
    },
  },
  checked: {
    width: 20,
    height: 20,
  },
})((props) => <Checkbox color="default" {...props} />);
const BrownCheckbox = withStyles({
  root: {
    margin: 5,

    borderRadius: 0,
    border: 0,
    background: "rgb(90,76,65)",
    color: "rgb(90,76,65)",
    '&$checked': {
      background: "#4cff00",
      color: "rgb(90,76,65)",
    },
  },
  checked: {
    width: 20,
    height: 20,
  },
})((props) => <Checkbox color="default" {...props} />);
const LightCheckbox = withStyles({
  root: {
    margin: 5,
    borderRadius: 0,
    border: 0,
    background: "rgb(141,135,130)",
    color: "rgb(141,135,130)",
    '&$checked': {
      background: "#4cff00",
      color: "rgb(141,135,130)",
    },
  },
  checked: {
    width: 20,
    height: 20,
  },
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedL: false,
    checkedBlc: false,
    checkedB: false,
    checkedBl: false,
    checkedY: false,
    checkedR: false,
    checkedLb: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<LightCheckbox
          checked={state.checkedL}
          onChange={handleChange}
          name="checkedL"
          checkedIcon={<CheckBoxIcon fontSize="large"/>}
        />}
      />
      <FormControlLabel
        control={<BrownCheckbox
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          checkedIcon={<CheckBoxIcon fontSize="large"/>}
        />}
      />
      <FormControlLabel
        control={<BlackCheckbox
          checked={state.checkedBlc}
          onChange={handleChange}
          name="checkedBlc"
          checkedIcon={<CheckBoxIcon fontSize="large"/>}
        />}
      />
      <FormControlLabel
        control={<YellowCheckbox
          checked={state.checkedY}
          onChange={handleChange}
          name="checkedY"
          checkedIcon={<CheckBoxIcon fontSize="large"/>}
        />}
      />
      <FormControlLabel
        control={<RedCheckbox
          checked={state.checkedR}
          onChange={handleChange}
          name="checkedR"
          checkedIcon={<CheckBoxIcon fontSize="large"/>}
        />}
      />
      <FormControlLabel
        control={<LightBlueCheckbox
          checked={state.checkedLb}
          onChange={handleChange}
          name="checkedLb"
          checkedIcon={<CheckBoxIcon fontSize="large"/>}
        />}
      />
      <FormControlLabel
        control={<BlueCheckbox
          checked={state.checkedBl}
          onChange={handleChange}
          name="checkedBl"
          checkedIcon={<CheckBoxIcon fontSize="large"/>}
        />}
      />
    </FormGroup>
  );
}
