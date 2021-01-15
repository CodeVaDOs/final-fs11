import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import EventNoteIcon from '@material-ui/icons/EventNote';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { news } from "../../utils/constants/newsList";

const blue = '#254A93';
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    margin: '0 auto',
    marginTop: '40px',
    marginBottom: '40px',
    padding: 0,
    width: '890px',
    borderRadius: '20px 20px 0 0',
    overflow: 'hidden',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.16)'
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#fff',
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  newsHead: {
    filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.261))',
    background: blue,
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  colored: {
    color: "white"
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
    textTransform: 'none',
    color: '#99A0A3',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(2),
  },
  date: {
    color: '#99A0A3'
  }
}));
const ColorButton = withStyles((theme) => ({
  root: {
    background: "#254A93",
    border: "1px solid #000000",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}))(Button);


export default function News() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <div className={classes.newsHead}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.colored}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className={classes.heading}>Новини <EventNoteIcon/></div>
            </Typography>
          </AccordionSummary>
        </div>


        <AccordionDetails>

          <List className={classes.list}>
            {
              news.map(({ image, title, anons, date }) => (
                <div key={title}>
                  <ListItem alignItems="flex-start">
                    <img
                      className={classes.cover}
                      src={image}
                    />
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inlinePrimary}>
                            {title}
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
                            {anons}
                          </Typography>
                          <div className={classes.controls}>
                            <Typography
                              component="p">
                              {date}
                            </Typography>
                            <ColorButton variant="contained" color="primary">
                              Детально
                            </ColorButton>
                          </div>
                        </React.Fragment>}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li"/>
                </div>
              ))
            }
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
