import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HouseCard from "./HouseCards";
import TabPanel from "./TabPanel";
import ControlNotificationContainer from "./ControlNotification/ControlNotificationContainer";
import { Container } from "@material-ui/core";
import { HouseContainer } from "../House";
import { ManagementServices } from "./ManagementServices/ManagmentServices";
import { tileData } from "../../../utils/constants/housesView";
import { useFetch } from "../../../hooks/useFetch";

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    marginRight: theme.spacing(4),
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  container: {
    width: 'max-content',
    height: 'fit-content',
    boxShadow: "2px 2px 2px 2px rgba(0,0,0, 0.16)",
    borderRadius: '20px',
    fontFamily: 'Roboto',
    display: 'flex',

  },
}));


export default function HousesTabs() {
  const classes = useStyles();
  const [value, setValue] = useState('one');
  const [Houses,] = useState(tileData);
  const [house, setHouse] = useState(tileData[0]);
  const [{ data, loading }, getData] = useFetch({
    url: `houses`
  });
  useEffect(() => {
    getData();
  }, []);

  console.log(data, loading);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function houseToState(e) {
    setHouse(Houses[e]);
  }

  return (
    <div className={classes.root}>
      <div>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab value="one" label="Мої будинки" wrapped/>
          <AntTab value="two" label="Управління"/>
        </AntTabs>
        <TabPanel value={value} index="one" style={{ position: "relative" }}>
          <HouseCard onHouseClick={houseToState} data={Houses}/>
          <Container className={classes.container}>
            <HouseContainer house={house}/>
          </Container>
        </TabPanel>
        <TabPanel value={value} index="two">
          <ControlNotificationContainer/>
          <ManagementServices/>
        </TabPanel>
      </div>
    </div>
  );
}

