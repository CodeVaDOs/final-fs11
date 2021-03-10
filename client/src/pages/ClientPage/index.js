import React, {useEffect} from "react";
import ClientTabs from "./components/Information/Tabs";
import {makeStyles} from "@material-ui/core/styles";
import {useLocation} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
    clearfix: {
        width: "97%",
        marginLeft: -10
    }

}));

const ClientPage = () => {
    const classes = useStyles();

    const location = useLocation()
    const userId = location.pathname.split('/').pop();
    const [{data: user, loading: loadingUser}, getUser] = useFetch({
        url: `/users/${userId}`
    });

    useEffect(() => {
        getUser();
    }, [])

    if (!user || loadingUser) return <CircularProgress size={60}/>

    return (
        <>
            <div className={classes.clearfix}>
                <ClientTabs user={user}/>
            </div>
        </>
    );
};

export default ClientPage;