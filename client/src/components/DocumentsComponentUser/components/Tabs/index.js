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
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

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
    marginTop: "20px",
    overflow: "hidden"
  },

  clearfix: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    height: 60
  },
  formControl: {
    boxShadow: "0px 2px 4px #00000029",
    width: "90%",
    margin: "0",
    padding: "0"
  },
  select: {
    fontWeight: "medium"
  },
  sortListWrap: {
    display: "flex",
    minWidth: 200,
    maxWidth: 300,
  },
  sortText: {
    fontSize: "16px",
    marginRight: "20px",
    fontWeight: "500"
  },
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
  ;
  const [sortOption, setSortOption] = useState("По даті");
  const handleChangeSort = (event) => {
    setSortOption(event.target.value);
  };

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

        <Grid item xs={4}
        >
          <div className={classes.sortListWrap}>
            <p className={classes.sortText}>Сортувати</p>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                value={sortOption}
                onChange={handleChangeSort}
                className={classes.select}
              >
                <MenuItem value="По даті">По даті</MenuItem>
                <MenuItem value="Останні додані">Останні додані</MenuItem>
                <MenuItem value="По даті документу">По даті документу</MenuItem>
                <MenuItem value="По імені від А до Я">По імені від А до Я</MenuItem>
              </Select></FormControl>
          </div>
        </Grid>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MyContractsUser/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MyBills/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MyExploitation/>
        </TabPanel>
      </SwipeableViews>

    </div>
  );
}
