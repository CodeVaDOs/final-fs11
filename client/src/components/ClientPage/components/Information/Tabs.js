import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Information } from "./index";
import { ClientHouses } from "../ClientHouses";
import { tileData } from "../../../../utils/constants/housesView";
import { House } from "../ClientHouses/House";
import { Documents } from "../Documents";
import { MyContracts } from "../Documents/MyContracts";
import ClientStatisticRent from "../../../ClientStatisticRent";
import { CreateNewHouse } from "../CreateNewHouse";
import EditUser from "../../../../pages/Client/components/EditUser";

const useStyles = makeStyles(() => ({
  root: {
    // borderLeft: '1px solid black',
    width: "90%",
    marginLeft: '3px',
    display: "flex",
    margin: "2px",
    flexDirection: 'row',
    textTransform: 'capitalize',
  },
  br: {
    width: "96%",
    textTransform: 'capitalize',
    padding: 0,
    margin: 0,
    backgroundColor: "white",
    color: 'black',
    borderRadius: "0px 30px 0px 0px  ",
  },
  tab: {
    width: "90%",
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  user: {
    backgroundColor: "white",
    maxWidth: '285px',
    minWidth: '285px',
  },
  columnStart: {
    width: '100%',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "white",
    borderRadius: "0px 30px 30px 0px  ",
  },
  columnProfile: {
    margin: 0,
    padding: 0
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
          <div>{children}</div>
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
  const [HouseIdx,] = useState(tileData);
  const [house, setHouse] = useState(tileData[0]);
  const [bottomView, setHousesDescription] = useState(0);
  const [createHouse, setCreateHouse] = useState(false);

  function houseToState(e) {
    setHouse(HouseIdx[e]);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setHousesDescription(newValue);
  };

  return (
    <>
      <div className={classes.columnStart}>
        <div className={classes.root}>
          <div className={classes.user}>
            <EditUser/>
          </div>
          <div
            className={classes.columnProfile}>
            <div className={classes.br}>
              <Tabs
                value={value}
                onChange={handleChange}
              >
                <Tab label="Iнформацiя" {...a11yProps(0)} />
                <Tab label="Будинки" {...a11yProps(1)} />
                <Tab label="Документи" {...a11yProps(2)} />
                <Tab label="Оренда" {...a11yProps(3)} />
              </Tabs>
            </div>
            <TabPanel
              value={value} index={0}>
              <Information/>
            </TabPanel>
            <TabPanel  value={value} index={1}>
              <ClientHouses
                setCreateHouse={setCreateHouse}
                createHouse={createHouse}
                houseToState={houseToState}
                HouseIdx={HouseIdx}
                rent={false}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Documents/>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ClientHouses
                houseToState={houseToState}
                HouseIdx={HouseIdx}
                buttonSend={true}
                rent={true}
              />
            </TabPanel>
          </div>
        </div>
        <div>
          {bottomView === 1
            ?
            <div>
              {
                createHouse
                  ? <CreateNewHouse/>
                  : ''
              }
              <House house={house}/>
            </div>

            : null}
          <div style={{ width: '100%' }}>
            {bottomView === 2 ? <MyContracts/> : null}
          </div>
          <div style={{ width: '100%' }}>
            {bottomView === 3 ?
              <ClientStatisticRent/>
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
