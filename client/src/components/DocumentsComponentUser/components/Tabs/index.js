import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MyContractsUser } from "./Contracts";
import { MyBills } from "./Platizki";
import { MyExploitation } from "./Exploitation";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "transparent",
    width: "100%",
    marginTop: "20px"
  },
  search: {
    position: "relative",
    width: "400px",
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
    border: "1px solid #B1B4BA",
    borderRadius: 10,
    backgroundColor: "#EEF5FF",
    height: 40
  },
  searchIcon: {
    fontSize: 30,
    margin: 10
  },
  inputRoot: {
    marginTop: 1,
    height: 28,
    width: "100%",
    backgroundColor: "#EEF5FF",
    border: "0",
    marginRight: 10
  },
  clearfix: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    height: 60
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const searchHandler = (event) => {
    event.preventDefault();
    // e.preventDefault();
    setSearch(event.target.value);
  };
  const [search, setSearch] = useState("");

  return (
    <div className={classes.root}>
      <div className={classes.clearfix}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Контракти" {...a11yProps(0)} />
          <Tab label="Платiжки" {...a11yProps(1)} />
          <Tab label="Експлуатацiя" {...a11yProps(2)} />

        </Tabs>
        <div className={classes.search}>
          <div>
            <SearchIcon className={classes.searchIcon}/>
          </div>
          <TextField
            focused={false}
            className={classes.inputRoot}
            onChange={searchHandler}
          />
        </div>
      </div>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MyContractsUser search={search}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MyBills search={search}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MyExploitation search={search}/>
        </TabPanel>
      </SwipeableViews>

    </div>
  );
}
