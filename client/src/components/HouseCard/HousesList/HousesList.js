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
    width: '100%',
    height: 'fit-content',
    boxShadow: "3px 3px 3px 3px rgba(0,0,0, 0.5)",
    borderRadius: '20px',
    fontFamily: 'Roboto',
    display: 'flex',

  },
}));


export default function HousesTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');
  const [data, setImages] = useState(tileData);
  const [house, setHouse] = useState(tileData[0]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function onHouseClick(e) {
    e.preventDefault();
    let ind = data.map(d => d).filter(id => id.id === e._targetInst.index);
    setHouse(ind[0]);
  };
  console.log('houseState', house);
  useEffect(() => {
  }, [HousesTabs]);
  return (
    <div className={classes.root}>
      <div>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab value="one" label="Мої будинки" wrapped/>
          <AntTab value="two" label="Управління"/>
        </AntTabs>
        <TabPanel value={value} index="one" style={{ position: "relative" }}>
          <HouseCard onHouseClick={onHouseClick} data={data}/>
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

