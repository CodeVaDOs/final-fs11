import React, {useEffect, useState} from "react";
import ClientTabs from "./components/Information/Tabs";
import {makeStyles} from "@material-ui/core/styles";
import {useLocation} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({}));

const ClientPage = () => {
    const classes = useStyles();

    const location = useLocation()
    const userId = location.pathname.split('/').pop();
    const [user, setUser] = useState(null);

    const [{loading: loadingUser}] = useFetch({
        url: `/users/${userId}`,
        onCompleted: (data) => setUser(data),
    });

    const editUser = (newUser) => setUser(newUser);

    if (!user || loadingUser) return <CircularProgress size={60}/>

    return (
        <>
            <ClientTabs editUser={editUser} user={user}/>
        </>
    );
};

export default ClientPage;