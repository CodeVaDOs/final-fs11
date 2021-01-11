import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CircularStatic from "./CircularProgress";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 290,
    height: 170,
    flexGrow: 1,
    padding: 25,
    borderRadius: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

/**
 * cardTitle, cardTitleDesc, cardDescription = {title, descriptiom}, circularStatic={progress, thickness, size, color}
 */

const IncomeCard = () => {
  const classes = useStyles();

  const cardTitle = "Total Income";
  const cardTitleDesc = "All house: House ID0170";
  const cardDescriptions = [
    {
      title: "$12.438K",
      description: "Location 1"
    },
    {
      title: "$6.135K",
      description: "Location 2"
    }
  ];
  const circularStatic = {
    progress: 18.573,
    thickness: 2,
    size: 80
  };

  return (
    <Box boxShadow={3}>
      <Card className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={7}>
            <h3 style={{ lineHeight: "0.8rem", fontWeight: 700, marginBottom: "0.2rem", fontSize: "1.3rem" }}>{cardTitle}</h3>
            <p style={{ fontSize: "0.8rem", color: "#b0bec5" }}>{cardTitleDesc}</p>
            {cardDescriptions && cardDescriptions.map((item, index) =>
              <React.Fragment key={item.title + index}>
                <h3 style={{ lineHeight: "0.8rem", marginBottom: "0.2rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#b0bec5" }}>{item.description}</p>
              </React.Fragment>)}

          </Grid>
          <Grid item xs={5} style={{ textAlign: "right" }}>
            <CircularStatic size={circularStatic.size} thickness={circularStatic.thickness} progress={circularStatic.progress}/>
            <Button fullWidth={true} style={{ marginTop: "1rem", height: "1.8rem", borderRadius: "0.9rem", backgroundColor: "#ff9800", color: "#ffffff", margin: 0, textTransform: "none", fontSize: "0.8rem", fontWeight: 800 }}>Detail</Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default IncomeCard;