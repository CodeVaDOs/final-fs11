import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HouseCard from "./HouseCards";
import TabPanel from "./TabPanel";
import ControlNotificationContainer from "./ControlNotification/ControlNotificationContainer";
import { HouseContainer } from "../House";
import { ManagementServices } from "./ManagementServices/ManagmentServices";
import { useTranslation } from "react-i18next";
import { useFetch } from "../../../hooks/useFetch";
import TempHousesForm from "../../TempHousesForm/TempHousesForm";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { housesActions } from "../../../redux/houses/action";

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
  const [house, setHouse] = useState([]);
  const [houses, setHouses] = useState([]);
  const dispatch = useDispatch();
  let {loading:load, houses: housesList} = useSelector(state => state.houses);
  useEffect(() => {
    if (!load) {
      console.log('housesList', housesList);
    }
    dispatch(housesActions.getHouses());
  }, []);

  const [{ data, loading }, getData] = useFetch(
    {
      url: "houses", onCompleted: (data) => {
        setHouses(data);
      }, initData: []
    }
  );

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  function houseToState(e) {
    setHouse(houses[e]);

  }

  const images = house?.houseImages?.flatMap(img => img.url);


  if (loading) return <CircularProgress size={60}/>;
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
          {
            house.length === 0
              ? ''
              : <HouseContainer images={images} house={house}/>
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index="two" style={{ width: '100%' }}>
        <ControlNotificationContainer notifications={user?.notifications}/>
        <ManagementServices/>
      </TabPanel>

      <TabPanel value={value} index="three" style={{ width: '100%' }}>
        <TempHousesForm/>
      </TabPanel>
    </div>
  );
}

