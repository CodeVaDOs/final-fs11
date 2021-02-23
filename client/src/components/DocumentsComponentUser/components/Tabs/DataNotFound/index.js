import ErrorIcon from "@material-ui/icons/Error";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    error: {
        width: 200,
        height: 200
    }, errorMessage: {
        width: 200,
        height: 200
    },
    errorContainer: {
        opacity: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
}));

export const DataNotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.errorContainer}>
            <ErrorIcon className={classes.error}/>
            <h2>Data not found</h2>
        </div>
    )
}
