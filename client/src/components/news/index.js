import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import EventNoteIcon from '@material-ui/icons/EventNote';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const blue = '#254A93';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: '890px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  newsHead: {
    background: blue,
    borderRadius: '15% 15% 0% 0%',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inlineSecondary: {
    display: 'inline',
    fontSize: '16px',
    color: '#6E7375',
    fontWeight: '400'

  },
  inlinePrimary: {
    display: 'inline',
    fontSize: '18px',
    color: '#293134',
    fontWeight: '600'
  },
  cover: {
    width: '20%',
    marginLeft: '-10px',
    marginTop: '10px',
    marginRight: '20px',
    borderRadius: '10%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    color: '#99A0A3',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(2),
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: blue,
  },
}))(Button);

export default function news() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Accordion>
          <div className={classes.newsHead}>
            <AccordionSummary
              color={"white"}
              expandIcon={<ExpandMoreIcon color="#0d47a1"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}><span>Новини  </span><EventNoteIcon/></Typography>
            </AccordionSummary>
          </div>


          <AccordionDetails>
            <List className={classes.list}>
              <ListItem alignItems="flex-start">
                <img
                  className={classes.cover}
                  src="https://hsto.org/getpro/habr/post_images/b65/b0c/75c/b65b0c75c9d5b3f2e76e3c1dba4dfad4.jpg"
                />
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inlinePrimary}>
                        {" Доступне нове місце розташування!"}
                        <br/>
                      </Typography>
                      <br/>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inlineSecondary}
                      >
                        {"Вітаємо клієнтів MARKSEM! MARKSEM відкриває нове місце на березі мальовничого озера в Карпатах. У новому місці також з’являться нові розваги та послуги для вашого."}
                      </Typography>
                      <div className={classes.controls}>
                        <Typography
                          component="p">
                          {`20.01.2021`}
                        </Typography>
                        <ColorButton variant="contained" color="primary">
                          Детальніше
                        </ColorButton>
                      </div>
                    </React.Fragment>}
                />
              </ListItem>
              <Divider variant="inset" component="li"/>
              <ListItem alignItems="flex-start">
                <img
                  className={classes.cover}
                  src="https://shoppingpl.com/uploads/post-covers/Dokumenty-do-pracy-w-Polsce.-Korzysci-i-osobliwosci-umowy-o-prace.jpg"
                />
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inlinePrimary}>
                        {"Нові умови співпраці!"}
                        <br/>
                      </Typography>
                      <br/>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inlineSecondary}
                      >
                        {"MARKSEM запускає новий проект співпраці. Вкладіть гроші в продукт MARKSEM і отримайте план розстрочки вже сьогодні. З отриманого доходу оплатіть покупку!\n" +
                        "Перейдіть за посиланням та дізнайтеся більше"}
                      </Typography>
                      <div className={classes.controls}>

                        <Typography
                          component="p">
                          {`20.01.2021`}
                        </Typography>

                        <ColorButton variant="contained" color="primary">
                          Детальніше
                        </ColorButton>
                      </div>
                    </React.Fragment>}
                />
              </ListItem>
              <Divider variant="inset" component="li"/>

            </List>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
