import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container } from "@material-ui/core";
import { Information } from "./index";
import { ClientHouses } from "../ClientHouses";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    borderRadius: "0px 30px 30px 0px  ",
    textTransform: 'capitalize',
  },
  br: {
    textTransform: 'capitalize',

    padding: 0,
    margin: 0,
    width: '102%',
    backgroundColor: "white",
    color: 'black',
    borderRadius: "0px 30px 0px 0px  ",
  },
  tab: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      className={classes.tab}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          p={3}>
          <Container>{children}</Container>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function ClientTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <AppBar
          className={classes.br}
          position="static">
          <Tabs
            value={value}
            onChange={handleChange}
          >
            <Tab label="Iнформацiя" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel
          value={value} index={0}>
          <Information/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ClientHouses/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Container>

    </div>
  );
}
