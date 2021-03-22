import React from 'react';
import {Card, CardActions, CardContent, Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {ChatRounded} from "@material-ui/icons";
import {Link} from "react-router-dom";
import ClientCardProfile from "./ClientCardProfile";
import defaultUser from "../../../images/avatar.png";

const useStyles = makeStyles({
    root: {
        padding: '22px 20px',
        borderRadius: '20px',
        background: '#fff',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },



    divider: {
      background: '#acb5b9',
      boxShadow: '1px 0px 3px rgba(0,0,0,0.3)'
    },

    main: {
        width: '58%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        padding: '0 26px !important'
    },

    analytic: {
        display: "flex",
        justifyContent: 'space-around',
    },

    analyticLabel: {
        fontSize: '18px',
        lineHeight: '27px',
        color: '#6e7375',
        margin: 0
    },
    analyticValue: {
        fontWeight: 500,
        fontSize: '30px',
        lineHeight: '39px',
        color: '#293134',
        margin: 0
    },
    analyticItem: {
        textAlign: "center",
        verticalAlign: 'middle'
    },



    buttonContainer: {
        marginTop: '21px'
    },
})


const ClientCard = ({user}) => {
    const classes = useStyles();

    const {contacts, name, email, urlAvatar, id} = user;

    const phone = contacts.find(contact => contact.type === "MAIN")?.phone || '+380933232222';

    return <Card className={classes.root}>

        <ClientCardProfile email={email} name={name} phone={phone} urlAvatar={urlAvatar || defaultUser} id={id}/>

        <Divider className={classes.divider} orientation="vertical" flexItem/>

        <CardContent className={classes.main}>
            <div className={classes.analytic}>
                <Typography className={classes.analyticItem}>
                    <p className={classes.analyticLabel}>Загальний Дохыд</p>
                    <h4 className={classes.analyticValue}> $18.573K</h4>
                </Typography>
                <Divider className={classes.divider} orientation="vertical" flexItem/>
                <Typography className={classes.analyticItem}>
                    <p className={classes.analyticLabel}>Дныв в Оренды</p>
                    <h4 className={classes.analyticValue}> 251 дныв</h4>
                </Typography>
                <Divider className={classes.divider} orientation="vertical" flexItem/>
                <Typography className={classes.analyticItem}>
                    <p className={classes.analyticLabel}>Витрати</p>
                    <h4 className={classes.analyticValue}>$6.573K</h4>
                </Typography>
            </div>

            <CardActions className={classes.buttonContainer}>
                <Button color="primary" variant='contained'>Написати &nbsp;<ChatRounded /></Button>
            </CardActions>
        </CardContent>
    </Card>;
};

export default ClientCard;