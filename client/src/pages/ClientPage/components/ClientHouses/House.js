import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HouseDesription from "../../../../components/HouseCard/House/HouseDesription";
import { useTranslation } from "react-i18next";
import { Button, CardActionArea } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import Box from "@material-ui/core/Box";
import { objectToFormData } from "../../../../utils/formData";
import api from "../../../../utils/api";
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '15px',
    marginTop: -100,
    font: 'Roboto'
  },
  topSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '15px',
    marginTop: '15px',
    font: 'Roboto'
  },
  btnEdit: {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    color: "#ffffff",
    backgroundColor: "#F88B38",
    width: 140,
    height: "30px",
    border: "0.5px solid #707070",
    borderRadius: "5px",
    opacity: 1,
  },
  editIcon: {
    margin: 5,
    padding: 1,
    position: 'absolute',
    right: 10
  },


  leftSide: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  },

  rightSide: {
    marginTop: '-200px',
    marginRight: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  houseIdInfo: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  id: {
    fontSize: '24px',
    color: '#9DC2FF',
  },
  houseDescription: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  houseIdInfoButtonBlock: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  ExportButton: {
    marginLeft: '10px',
    textTransform: 'none',
    textDecoration: 'none',
    color: '#464C4E',
    border: '1px solid #6E7375', borderRadius: '10px',
    padding: '20px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },


  houseRentStatisticBlock: {
    margin: '20px',
    borderRadius: '20px',
    paddingTop: '5px',
    boxShadow: "1px 2px 2px rgba(0,0,0,0.19), 1px 2px 2px rgba(0,0,0,0.23)",
    padding: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  diagramBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'space-evenly',
    minHeight: "190px"
  },
  diagramBody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
  },

  roundOfStatistic: {
    margin: '10px',
    width: '100px',
    height: '100px',
  },
  persentsBlock: {
    lineHeight: '8px'
  },
  moneyInDollars: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
    fontWeight: 400
  },
  days: {
    fontSize: '16px',
    fontWeight: 400
  },
  persents: {
    fontSize: '12px'
  },
  persentsCount: {
    color: '#4AD584'
  },
  persentsFromTo: {
    color: '#99A0A3'
  },
  statisticRent: {

    fontSize: '16px',
    color: '#293134',
    marginLeft: '30px',
    marginTop: '20px',
    width: "100%"
  },

  textBlock: {
    marginLeft: 40,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    color: '#293134'
  },
  texte: {
    fontSize: 16,
    color: '#6E7375'

  },
  btns: {
    fontSize: "14px",
    color: "#B1B4BA",
    textAlign: "left",
    font: "normal normal normal 14px/19px Roboto",
    letterSpacing: "-0.07px",
    opacity: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  btnSend: {
    textTransform: 'capitalize',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#254A93',
    width: "143px",
    height: "30px",
    background: "#EEF5FF 0% 0% no-repeat padding-box",
    border: "0.5px solid #ACB5B9",
    borderRadius: "5px",
    opacity: 1,
  },

  subGrid: {
    marginTop: 20
  },

}));

export const House = ({ house, showHouses, uploadImg, data, setData, setRequest, request }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const renderUploadedState = () => {
    return (
      <>
        <CardActionArea>
          {
            !request
              ? <img width={"400px"} alt={'ssss'}
                     style={{ borderRadius: 20 ,margin:20}}
                     src={uploadImg.selectedFile}
              />
              : <div></div>

          }

        </CardActionArea>
      </>
    );
  };
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {request
        ? <h2 style={{ marginTop: "-750px" }}>Новий будинок успішно створений!</h2>
        : <div>
          {showHouses
            ? <div className={classes.root}>
              <div className={classes.topSide}>
                <div className={classes.leftSide}>
                  <Box className={classes.photoContainer}>
                    {(uploadImg.mainState === "initial" && <div>IMG ZDECb</div>) ||
                    (uploadImg.mainState === "uploaded" && renderUploadedState())}
                  </Box>
                </div>

                <div className={classes.rightSide}>
                  <div className={classes.houseIdInfo}>
                    <p className={classes.id}>{t('id')} {house.id}</p>
                  </div>
                  <Box className={classes.houseDescription}>
                    <HouseDesription house={house}/>
                  </Box>
                  <div className={classes.btns}>
                    <Button className={classes.btnSend}>
                      Написати <MessageIcon className={classes.editIcon}/></Button>
                    <Button
                      className={classes.btnEdit}
                      onClick={() => {
                        const formData = objectToFormData(data, '', ['images']);
                        data.images.forEach((file, index) => {
                          formData.append(`images[${index}]`, file, file.name);
                        });

                        api.post('houses', formData, {
                          headers: { "Content-Type": "multipart/form-data" },
                        }).then(setRequest(true));
                      }}>Створити <SaveIcon className={classes.editIcon}/></Button>
                  </div>

                </div>

              </div>
            </div>
            : null
          }

        </div>

      }
    </div>


  )
    ;
};