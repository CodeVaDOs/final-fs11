import React from 'react';
import {Card, CardContent, Divider, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    profile: {
        width: '42%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        padding: 0
    },

    userLink: {
        display: 'flex',
        alignItems: 'flex-end',
    },

    userAvatar: {
        borderRadius: '50%',
        objectFit: 'cover',
        width: '40px',
        height: '40px',
        marginRight: '15px'
    },

    userName: {
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '0em',
        color: '#293134'
    },

    userData: {
        marginTop: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    leftSideContent: {
        width: '45%',
        paddingRight: '15px',
        flexDirection: 'column',
    },

    rightSideContent: {
        display: 'flex',
        width: '55%',
        paddingLeft: '15px',
        flexDirection: 'column',

    },

    statusLabel: {
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '0em',
        color: '#293134',
        margin: '10px 0 0'
    },
    statusValue: {
        color: '#6e7375',
        fontSize: '14px',
        letterSpacing: '0em',
        margin: '5px 0 0 0'
    },

    link: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'flex-end'
    },

    phoneNumber: {
        fontSize: '14px',
        color: '#6e7375',
        letterSpacing: '0em'
    },

    email: {
        fontSize: '14px',
        color: '#254a93',
        letterSpacing: '0em'
    },

    divider: {
        background: '#acb5b9',
        boxShadow: '1px 0px 3px rgba(0,0,0,0.3)'
    },


})

const ClientCardProfile = ({urlAvatar, name, phone, email, id}) => {

    const classes = useStyles();
    return (
        <CardContent className={classes.profile}>
            <div className={classes.userLink}>
                <Link className={classes.link} to={"clients/" + id}>
                    <img src={urlAvatar} alt="user avatar" className={classes.userAvatar}/>
                    <Typography variant="h3" className={classes.userName}>
                        {name}
                    </Typography>
                </Link>
            </div>
            <div className={classes.userData}>
                <div className={classes.leftSideContent}>
                    <Typography className={classes.phoneNumber}>{phone}</Typography>
                    <Typography>
                        <h4 className={classes.statusLabel}>Статус</h4>
                        <p className={classes.statusValue}>Постыйний клыент</p>
                    </Typography>
                </div>

                <Divider className={classes.divider} orientation="vertical" flexItem/>

                <div className={classes.rightSideContent}>
                    <Typography className={classes.email}>{email}</Typography>
                    <Typography>
                        <h4 className={classes.statusLabel}>Будинкыв: 2</h4>
                        <p className={classes.statusValue}>Постыйний клыент</p>
                    </Typography>
                </div>
            </div>
        </CardContent>
    );
};

export default ClientCardProfile;