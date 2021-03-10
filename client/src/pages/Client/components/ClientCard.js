import React from 'react';
import {Card, CardActions, CardContent, Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {ChatRounded} from "@material-ui/icons";
import {Link} from "react-router-dom";

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

    profile: {
      width: '42%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        padding: 0
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

    buttonContainer: {
        marginTop: '21px'
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
        textDecoration: 'none'
    }
})

// birthday: "1988-02-28T08:31:37.417+00:00"
// contacts: []
// createDate: "2021-03-02T08:38:07.868+00:00"
// createdBy: "test@gmail.com"
// currency: "EUR"
// email: "testUser@ukr.net"
// id: 9
// language: "UKRAINIAN"
// manager: null
// managerId: 3
// name: "Тест Юзер"
// notifications: []
// role: "MANAGER"
// tasks: []
// updateDate: "2021-03-02T08:38:07.868+00:00"
// updatedBy: "test@gmail.com"
// urlAvatar: "http://upruda.ru/images/business-portraits/003.jpg"
// version: 0

const ClientCard = ({user}) => {
    const classes = useStyles();

    const {contacts, name, email, urlAvatar, id} = user;

    const phone = contacts.find(contact => contact.type === "MAIN")?.phone || '+380933232222';

    return <Card className={classes.root}>
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