import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HouseCard from "./HouseCards";
import TabPanel from "./TabPanel";
import ControlNotificationContainer from "./ControlNotification/ControlNotificationContainer";
import {HouseContainer} from "../House";
import {ManagementServices} from "./ManagementServices/ManagmentServices";
import {tileData} from "../../../utils/constants/housesView";
import {useTranslation} from "react-i18next";

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    width: "90%",
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

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '18px',
  },
  tabs: {
    width: "100%"
  }
}));


export default function HousesTabs() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [value, setValue] = useState('one');
  const [Houses,] = useState(tileData);
  const [house, setHouse] = useState(tileData[0]);
  // const [{ data, loading }, getData] = useFetch({ url: `houses` });
  // console.log(data, loading);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function houseToState(e) {

    setHouse(Houses[e]);
  }

  return (
      <div className={classes.root}>
        <AntTabs className={classes.tabs} value={value} onChange={handleChange} aria-label="ant example">
          <AntTab value="one" label={t("myHouses")} wrapped/>
          <AntTab value="two" label={t("control")}/>
        </AntTabs>
        <TabPanel value={value} index="one" style={{position: "relative"}}>
          <HouseCard onHouseClick={houseToState} data={Houses}/>
          <HouseContainer house={house}/>
        </TabPanel>
        <TabPanel value={value} index="two" style={{width: '100%'}}>
          <ControlNotificationContainer/>
          <ManagementServices/>
        </TabPanel>
      </div>
  );
}

