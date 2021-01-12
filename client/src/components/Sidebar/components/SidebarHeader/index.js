import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  headerContainer: {
    justifyContent: 'space-between',
    backgroundColor: '#eef5ff',
    maxWidth: '415px',
    width: '415px',
    height: '68px',
    paddingBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  }
});

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className="settings-container">
        <div className="switcher flex-center">
          <img
            src=""
            alt="country flag" className="country-flag"/>
          <p className="language">UA</p>
        </div>

      </div>
      <div className="user-container flex-center">
        <div className="user-credit">
          <h2 className="user-name">Дмитро Овсієнко</h2>
          <p className="user-role">Інвестор</p>
        </div>
        <img
          src=""
          className="user-avatar"/>
      </div>
    </div>
  );
};

export default Index;
