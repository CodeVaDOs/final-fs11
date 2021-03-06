import React, { useState } from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  paper: {
    width: "auto",
    maxWidth:"none",
    border: "1px solid #707070",
    borderRadius: '20px',
    marginTop: "70px"

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
  callButton: {
    width:"156px",
    height:"30px",
    border: "1px solid #254A93",
    textTransform:"none",
    borderRadius: '10px',
    margin: "20px",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    backgroundColor:"#254A93",
    color:"#fff",
    "&:hover": {
      backgroundColor:"#fff",
      color:"black"
    },
    "& .MuiSelect-filled.MuiSelect-filled": {
      backgroundColor:'#fff',
      padding:"0px 32px 0px 0px",
      border:"fff",
      color: "#818E94"
    },
  }
});

export const ModalContext = React.createContext({});

const ModalsContainer =({ displayBtn="none", buttonOk, buttonCancel, buttonActivateDialog, body, style, clickIcon })=>{

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return(
    <Box>
      <Button style={style} onClick={handleClickOpen}>{clickIcon}
        {buttonActivateDialog}
      </Button>
      <Dialog classes={{ paper: classes.paper }}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <CloseIcon onClick={handleClose} style={{ position:"absolute", right:"10px", top: "10px", cursor:"pointer" }}/>
        <DialogContent>
          <DialogContentText>
            <ModalContext.Provider value={{
              handleClose,
            }}>
              {body}
            </ModalContext.Provider>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          {/*<Button style={{ display:`${displayBtn}` }} className={classes.btn} ></Button>*/}
          {/*<Button style={{ display:`${displayBtn}` }} className={classes.btn} ></Button>*/}
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default ModalsContainer;