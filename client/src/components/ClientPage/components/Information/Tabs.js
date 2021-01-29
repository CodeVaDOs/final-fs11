import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container } from "@material-ui/core";
import { Information } from "./index";
import { ClientHouses } from "../ClientHouses";
import { tileData } from "../../../../utils/constants/housesView";
import { House } from "../ClientHouses/House";
import { Documents } from "../Documents";
import { MyContracts } from "../Documents/MyContracts";

const useStyles = makeStyles(() => ({
  root: {

    // borderLeft: '1px solid black',
    marginLeft: '3px',
    display: "flex",
    margin: "2px",
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
  },
  br: {
    textTransform: 'capitalize',
    padding: 0,
    margin: 0,
    width: '100%',
    backgroundColor: "white",
    color: 'black',
    borderRadius: "0px 30px 0px 0px  ",
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  user: {
    backgroundColor: "white",
    minHeight: '390px',
    maxHeight: '390px',
    minWidth: "350px",
    maxWidth: "350px",
    border: '2px solid black'
  },
  columnStart: {
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
  const [HouseIdx,] = useState(tileData);
  const [house, setHouse] = useState(tileData[0]);
  const [bottomView, setHousesDescription] = useState(null);

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
          <Container className={classes.user}>
            Tartakovsky Component
          </Container>
          <Container
            className={classes.columnProfile}>
            <div className={classes.br}
            >
              <Tabs
                value={value}
                onChange={handleChange}
              >
                <Tab label="Iнформацiя" {...a11yProps(0)} />
                <Tab label="Будинки" {...a11yProps(1)} />
                <Tab label="Документики" {...a11yProps(2)} />
              </Tabs>
            </div>
            <TabPanel
              value={value} index={0}>
              <Information/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ClientHouses houseToState={houseToState} HouseIdx={HouseIdx}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Documents/>
            </TabPanel>
          </Container>

        </div>
        {bottomView === 1 ? <House house={house}/> : null}
        {bottomView === 2 ? <MyContracts/> : null}
      </div>
    </>
  );
}
