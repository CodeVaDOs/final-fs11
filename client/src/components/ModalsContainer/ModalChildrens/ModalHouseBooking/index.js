import React, {useContext} from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import {ModalContext} from "../../index";

const useStyles = makeStyles({
    containerClient: {
        margin: "o auto",
        overflow: "none"
    },
    headerClient: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '19px',
        fontWeight: 'bold',
        color: '#293134',
        margin:"5% 7%"
    },
    greyTextClient: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '12px',
        fontWeight: 'normal',
        color: '#6E7375',
        margin:"0% 10%"
    },
    blackTextClient:{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '19px',
        fontWeight: 'normal',
        margin:"0% 10%",
        color:'#293134'
    },
    boldClient:{
        fontWeight: 'bold',
    },
    blueClient:{
        fontWeight: 'bold',
        color:"#254A93"
    },
    smallTextClient:{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: 'normal',
        color:'#293134'
    },
    btn: {
        height: '60px',
        width: '240px',
        border: "1px solid #254A93",
        textTransform:"none",
        borderRadius: '10px',
        margin: "20px",
        fontFamily: 'Roboto, sans-serif',
        fontSize: '19px',
        fontWeight: 'normal',
        backgroundColor:"#254A93",
        color:"#fff",
        "&:hover": {
            backgroundColor:"#fff",
            color:"black"
        }
    },
});
const Index=({name, onClick})=> {
    const {handleClose} = useContext(ModalContext);
    const classes = useStyles();
    const { t } = useTranslation();
    return(<Box className={classes.containerClient}>
        <Box style={{ textAlign:"center" }}>
            <Typography className={classes.headerClient}>{t("headerClient")}<span className={classes.blueClient}>{name}</span></Typography>
        </Box>
        <Box style={{ textAlign:"center" }}>
            <Typography className={classes.blackTextClient}>{t("textClient")}</Typography>
        </Box>
        <Box style={{ textAlign:"center" }}>
            <Typography className={classes.greyTextClient}>
                {t("subTextClient")}
            </Typography>
        </Box>
        <Box style={{ marginLeft:"17%", marginTop:"5%" }}>
            <Button className={classes.btn} onClick={()=>{
                if (handleClose) handleClose();
            }} >{t("returnBtn")}</Button>
            <Button className={classes.btn}
                    onClick={()=>{
                        onClick();
                        handleClose();
                    }}
            >{t("clientBtnCard")}</Button>
        </Box>
    </Box>);
};
export default Index;