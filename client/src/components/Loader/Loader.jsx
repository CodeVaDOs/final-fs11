import React from 'react';
import {makeStyles} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";

const useStyles = makeStyles({
    root: {
        margin: 'auto',
        position: 'relative'
    },

})

const Loader = (props) => {
    const classes = useStyles();
    return (
        <CircularProgress className={clsx(classes.root, props.center && classes.center)} {...props}/>
    );
};

export default Loader;