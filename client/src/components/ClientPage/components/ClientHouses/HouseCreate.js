import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { CardActionArea, CardContent, Fab } from "@material-ui/core";
import LocalSeeIcon from "@material-ui/icons/LocalSee";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { objectToFormData } from "../../../../utils/formData";
import api from "../../../../utils/api";


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    display: 'flex',
    flexDirection: 'row',
  },

  photoContainer: {

    width: '100%',
    borderRadius: '15%',
    background: '#F7FAFF',
    border: '0.5px solid #6E7375',
    marginTop: '10px',
    height: '109px',

  },

  smallText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 'normal',
    textTransform: 'none',
    color: '#fff',
    marginTop: '-10px',
    marginLeft: '12px'
  },
  greyButton: {
    backgroundColor: "rgba(41, 49, 52, 0.8)",
    width: '67px',
    height: '67px',
    borderRadius: '50%',
    marginTop: '3px',
    marginLeft: '0px',
    cursor: "pointer"
  },

  houseCard: {
    marginLeft: '30px',
    height: '99%',
    margin: '4px',
    boxSizing: 'border-box',
    padding: "10px",
    borderRadius: '20px',
    minWidth: '182px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 4px 4px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)",

  },
  img: {
    width: "100%",
    borderRadius: '18px',
  },
  houseCardBody: {

    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    lineHeight: '28px'
  },
  cardContract: {
    fontSize: '12px',
    display: 'inline',
    opacity: "60%",
  },
  cardId: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: 'row',
    fontSize: '18px',
  },
  inline: {
    display: 'inline',
  },
  locationData: {
    display: 'inline',
    fontSize: '12px',
    lineHeight: "20px",

  },
  red: {
    width: "17px",
    height: "17px",
    background: "#FA505D 0% 0% no-repeat padding-box",
    borderRadius: " 3px",
    opacity: 1,
  }
}));
export const HouseCreate = ({ setCreateHouse }) => {
  const [data, setData] = useState({
    location: 'Zhytomyr, Ukraine',
    equipment: 'Vse est, fen est',
    area: 'sto kvadratnyh metrov',
    description: 'Systhasnyi budinok, fen est',
    ownerId: 7,
    houseModelId: 1,
    images: []
  });
  const classes = useStyles();
  const { t } = useTranslation();

  const [uploadImg, setUploadImg] = useState({
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  });

  const buttonOnClick = () => {

    const formData = objectToFormData(data, '', ['images']);
    data.images.forEach((file, index) => {
      formData.append(`images[${index}]`, file, file.name);
    });

    api.post('houses', formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleUploadClick = e => {
    const { files } = e.target;
    setData({
      ...data,
      images: Object.keys(files).map(function (key) {
        return files[key];
      })
    });
    setCreateHouse(true);
    buttonOnClick();
  };


  const imageResetHandler = () => {
    setUploadImg({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0
    });
  };
  //Upload Photo Managment
  const renderInitialState = () => {
    return (
      <>
        <CardContent>
          <Grid container justify="center" alignItems="center">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab onClick={buttonOnClick} component="span" className={classes.greyButton}>
                <Typography>Edit</Typography>
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </>
    );
  };
  const renderUploadedState = () => {
    return (
      <>
        <CardActionArea onClick={imageResetHandler}>
          <img width={"104px"} height={"104px"} alt={'ssss'} style={{ borderRadius: '50%' }}
               src={uploadImg.selectedFile}
          />
        </CardActionArea>
      </>
    );
  };

  return (
    <div
      className={classes.houseCard}
    >
      <Box className={classes.photoContainer}>
        {(uploadImg.mainState === "initial" && renderInitialState()) ||
        (uploadImg.mainState === "uploaded" && renderUploadedState())}
      </Box>
      <div className={classes.houseCardBody}>
        <span className={classes.cardContract}> Контракт -----</span>
        <span className={classes.cardId}><div className={classes.red}/> ID 0000</span>
      </div>

    </div>
  );
};
