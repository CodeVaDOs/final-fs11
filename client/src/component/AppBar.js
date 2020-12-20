import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Search from './Search';

const useStyles = makeStyles({
  list: {
    width: 'auto',
    background: 'whitesmoke',
    margin: '0 auto',
  },
  link: {
    color:'black',
    textDecoration:'none',
    padding:'10px'
  },
  button: {
    width: '25px',
    height: '60px',
    transform: 'rotate(90deg)',
    border: '1px solid black',
    borderRadius: '100%',
    position: 'absolute',
    right: window.innerWidth / 2
  }

});

export default function TemporaryDrawer ({ route }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"

    >
      <List style={{ 'display': 'flex' }}>
        {route.routes.map((link, index) => (
          <Link
            onKeyDown={toggleDrawer(anchor, false)}
            onClick={toggleDrawer(anchor, false)}
            className={clsx(classes.link)}
            to={link.path}
            key={index}
          >
            <ListItemText
              primary={link.name}/>
          </Link>
        ))}
        <Search/>
      </List>
    </div>
  );
  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className={clsx(classes.button)}
            onClick={toggleDrawer(anchor, true)}
          >{'>'}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
