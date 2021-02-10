import React, { useState } from 'react';
import Container from "../../components/Container";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import { More } from "@components/ClientPage/components/More";
import ClientBigCard from '@components/PanelClientBigCard';
import PanelClientSmallCard from '@components/PanelClientSmallCard';
const useStyles = makeStyles({
  indicator: {
    backgroundColor: '#254A93',
  },
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    textTransform:"none",
    marginTop:"20px",
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color:"#254A93",
      textTransform:"none",
    },
    "& .MuiTab-root": {
      color:"#254A93",
      textTransform:"none",
    },
    "& .MuiAppBar-colorDefault": {
      backgroundColor: "transparent",
      color:"#6E7375",
      opacity:1
    },
    "& .PrivateTabIndicator-colorPrimary-96": {
      backgroundColor:"#254A93",
      color:'#6E7375'
    },
    "& .MuiTab-wrapper": {
      fontSize:"18px",
    },
    "& .MuiBox-root-100": {
      height: "480px",
      padding:0,
    }
  },
  textBlack:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft: "2%"
  }
});
const a11yProps=(index)=> {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
const TabPanel=(props)=> {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Index =()=> {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(<Container>
    <Box className={classes.root}>
      <AppBar position="static" color="default" style={{ boxShadow:"none" }}>
        <Tabs  classes={{ indicator: classes.indicator }} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Статистика" {...a11yProps(0)} />
          <Tab label="Заявки" {...a11yProps(1)} />
          <Tab label="Будинки" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={8}>
            <ClientBigCard userType={"manager"}/>
          </Grid>
          <Grid item xs={4}>

          </Grid>
        </Grid>
        <More/>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  </Container>);
};
export default Index;
