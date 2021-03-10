import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import TextField from '@material-ui/core/TextField';
import ButtonStyle from "../Button";
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Bell from '../../assert/icons/bellRing.svg';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import {useDispatch, useSelector} from "react-redux";
import { NOTIFICATION_ACTIONS } from "@redux/notifications/action";


const useStyles = makeStyles((theme)=>({
  formControlSelect: {
    margin: theme.spacing(1),
    minWidth: 139,
  },
  rootPaper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '177px',
    height: '30px',
    marginLeft: '-20px',
    fontWeight: 400,
    fontSize: 14,
  },
  inputPaper: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: '100%',
    height: '339px',
    borderRadius: '20px',
    boxShadow: '0px 2px 4px #00000033',
    marginBottom:"12px",
    backgroundColor:"#fff"
  },
  titleContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    background:'#fff',
    marginLeft: '20px',
    textAlign: "left",
    padding: "20px",
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#293134',
    marginLeft:"-20px"
  },
  selectContainer: {
    height: 50,
    width: 850,
  },
  text:{
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    fontWeight: 'medium',
    color: '#293134'
  },
  rootInput: {
    borderRadius: 10,
    height: 165,
    width: "100%",
    color:'#99A0A3',
    backgroundColor:'#F7FAFF',
    marginLeft:"-20px",
    border:"0.5px solid #ACB5B9",
    "& label.Mui-focused": {
      color: "#254A93",
      borderRadius: '10px',
    },
    "& .MuiOutlinedInput-multiline": {
      padding: "6px 15px",
      color:'#99A0A3'
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "0.5px solid #ACB5B9",
        borderRadius: "10px"
      },
      "& .Mui-focused fieldset": {
        borderColor: "#254A93",
        color: "#254A93",
      },
    },
  },
  rootSelect:{
    "& .MuiSelect-filled.MuiSelect-filled": {
      backgroundColor:'#fff',
      padding:"0px 30px 0px 0px"
    },
  },
  active:{
    backgroundColor: '#fff',
    color:'#6E7375',
    border: "1.4px solid #6E7375",
    textTransform:'none',
  }
}));

const PanelAdmMemo =()=>{
  const classes = useStyles();
  const { t } = useTranslation();
  const clients = useSelector(store => store.total.accessPanel.clients);
  const init = {
    title: '',
    text:'',
    importance:'SMALL',
    receivers: '',
  };
  const [dataForm, setDataForm] = useState(init);

  const handleChangeData = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };

  const dispatch = useDispatch();
  const onSubmit =()=>{
    let data = dataForm;
    data.receivers = dataForm.receivers === 'all' ? clients.map(c => c.id) : [dataForm.receivers];
    dispatch(NOTIFICATION_ACTIONS.setNotifications(data));
    setDataForm(init);
  };
  return(<>
    <Box className={classes.formControl}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>
          {t('memoTitle')} <img src={Bell} style={{ marginBottom:"-8px", marginLeft:"7px" }} alt="bell"/>
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Box style={{ marginTop:"10px", marginBottom:"20px" }}>
              <Paper component="form" className={classes.rootPaper}>
                <InputBase
                  className={classes.inputPaper}
                  placeholder={t('createBtn')}
                  name = "title"
                  value={dataForm.title}
                  onChange={handleChangeData}
                />
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2}><Typography className={classes.text}>{t("typeMassage")}</Typography></Grid>
          <Grid item xs={2}>
            <FormControl variant="filled" className={classes.formControlSelect}>
              <Select className={classes.rootSelect}
                value={dataForm.importance}
                name = "importance"
                onChange={handleChangeData}
              >
                <MenuItem value="LARGE">{t("important")}</MenuItem>
                <MenuItem value="MEDIUM">{t("informative")}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}><div style={{ marginLeft:"65px" }}><Typography className={classes.text}>{t("sendBtn")}</Typography></div></Grid>
          <Grid item xs={3}>
            <FormControl variant="filled" className={classes.formControlSelect}>
              <Select className={classes.rootSelect}
                value={dataForm.receivers}
                name="receivers"
                onChange={handleChangeData}
              >
                <MenuItem value="all">{t("allClients")}</MenuItem>
                {clients?.map(client =>
                  <MenuItem value={client.id}>{client.name}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField className={classes.rootInput}
            multiline
            rows={8}
            variant="outlined"
            placeholder={t('inputValue')}
            name="text"
            value={dataForm.text}
            onChange={handleChangeData}
          />
        </form>
        <Box style={{ textAlign: "end", marginTop:"20px" }}>
          <ButtonStyle w={"100px"} h={"30px"} fs={14} fw={400} bgcolor={"#254A93"} ml={"730px"} text={t('sendBtn')} onClick={onSubmit}/>
        </Box>
      </Box>
    </Box>
  </>);
};
export default PanelAdmMemo;