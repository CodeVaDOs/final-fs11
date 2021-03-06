import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HouseCard from "./HouseCards";
import TabPanel from "./TabPanel";
import ControlNotificationContainer from "./ControlNotification/ControlNotificationContainer";
import { HouseContainer } from "../House";
import { ManagementServices } from "./ManagementServices/ManagmentServices";
import { tileData } from "../../../utils/constants/housesView";
import { useTranslation } from "react-i18next";
import { housesActions } from "../../../redux/houses/action";
import { useFetch } from "../../../hooks/useFetch";
import TempHousesForm from "../../TempHousesForm/TempHousesForm";

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
    margin: '0 auto',
    display: 'flex',
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  tabs: {
    width: "100%"
  },
  grid: {}

}));


export default function HousesTabs() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [value, setValue] = useState('one');
  const [house, setHouse] = useState([] || data);
  const [houses, setHouses] = useState([] || data);
  const [{ data, loading }, getData] = useFetch(
    { url: "houses" });

  useEffect(() => {
    getData();
    if (loading) {
      console.log(data);
      console.log(loading);
      setHouses(data);
    } else {
      return <div>Load...</div>;
    }
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function houseToState(e) {
    setHouse(houses[e]);
  }

  return (
    <div className={classes.root}>
      <AntTabs className={classes.tabs} value={value} onChange={handleChange} aria-label="ant example">
        <AntTab value="one" label={t("myHouses")} wrapped/>
        <AntTab value="two" label={t("control")}/>
        <AntTab value="three" label={"Создать дом (тест)"}/>
        {/*<AntTab value="two" label={t("control")}/>*/}
      </AntTabs>
      <TabPanel value={value} index="one">
        <div className={classes.grid}>
          <HouseCard onHouseClick={houseToState} data={houses}/>
          <HouseContainer house={house}/>
        </div>

      </TabPanel>
      <TabPanel value={value} index="two" style={{ width: '100%' }}>
        <ControlNotificationContainer/>
        <ManagementServices/>
      </TabPanel>

      <TabPanel value={value} index="three" style={{ width: '100%' }}>
        <TempHousesForm/>
      </TabPanel>

    </div>
  );
}

