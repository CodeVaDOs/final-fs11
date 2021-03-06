import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useTranslation } from "react-i18next";
import ManagerCard from "../ManagerCard";
import avatar from "../../images/avatar.png";
import { connect } from "react-redux";

const useStyles = makeStyles({
  taskContainer:{
    width:"356px",
    height: "134px",
    borderRadius:"20px",
    boxShadow: "0px 1px 3px #00000033",
    backgroundColor:"#fff",
    marginTop:"10px",
    marginBottom:"10px"
  },
  line: {
    width: "7px",
    height: "107px",
    marginLeft: "7px",
    marginTop: "14px",
    borderRadius:"20px",
  },
  grey:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#B1B4BA',
    textAlign: "start",
    marginTop: "10px",
    paddingRight:"5px"
  },
  btnTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#293134'
  },
  btnBtn: {
    width: "27px",
    height: "27px",
    minWidth:"0px",
    borderRadius: "50px",
    backgroundColor: '#EEF5FF',
    marginTop:'-43px',
    marginLeft:'75px'
  },
  header: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#254A93',
    textAlign: "center",
    marginTop: "20px"
  },
  header2:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#293134',
    textAlign: "start",
    marginTop: "20px"
  },
  red: {
    width:"25px",
    height:"25px",
    backgroundColor:"#FA505D",
    borderRadius:"50%",
    marginLeft:"260px",
    marginTop: "-25px"
  },
  span1: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: 'normal',
    color: '#fff',
    textAlign: "center",
    marginBottom:"5px"
  },
});

const TaskPanel = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const isClient =()=>{
    return(<>
      <Box>
        <Typography className={classes.header}>{t("personalManager")}</Typography>
        {/*<ManagerCard />*/}
      </Box>
    </>);
  };

  const isManager = ()=>{
    return(
      <>
        <Box>
          <Typography className={classes.header}>{t("tasks")}<Box className={classes.red}><span className={classes.span1}>{props.user?.tasks?.length}</span></Box></Typography>
        </Box>
        { props.user.tasks?.map(c=>
          <Box key={c.id} className={classes.taskContainer}>
            <Grid className={classes.container}
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={1}>
                <Box className={classes.line} style={{ backgroundColor: `#00D0FF` }}> </Box>
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.header2}>{c.title}</Typography>
                <Typography className={classes.grey}>{c.text}</Typography>
                <Box style={{ marginLeft: "210px" }}>
                  <Typography className={classes.btnTitle}>{t("detailSecond")}</Typography>
                  <Button className={classes.btnBtn} onClick={()=>{}}><ArrowForwardIosIcon style={{ color:"#99A0A3", fontSize:"15px" }}/></Button>
                </Box>
              </Grid>
            </Grid>
          </Box>)
        }
      </>
    );
  };
  return (<>
    {(props.user.role === "USER" && isClient()) || (props.user.role === "MANAGER" && isManager()) || (props.user.role === "ADMIN" && isManager())}
  </>);
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, null)(TaskPanel);