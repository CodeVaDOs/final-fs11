import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import {CardContent, makeStyles} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import InputMask from 'react-input-mask';
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import api from "../../../utils/api";
import Loader from "../../../components/Loader/Loader";

const useStyles = makeStyles({
    root: {
        // boxShadow: '2px 0px 3px rgba(0, 0, 0, 0.5)',
        // borderRight: '1px solid #707070',
        // borderBottom: '1px solid #707070',
        boxShadow: 'none',
        borderRadius: 0
    },

    buttonSubmit: {
        width: '100%',
        textTransform: 'capitalize',
        borderRadius: '15px',
        border: '1px solid #6e7375',
        padding: '5px',
        height: '30px',
        marginTop: '3px'
    },

    inputLabel: {
        marginBottom: '15px',
        width: '100%',
        "& > label": {
            fontWeight: 500,
            color: '#6e7375',
            lineHeight: '19px',
            fontSize: '18px'
        },
        "& > input": {
            color: '#293134',
            lineHeight: '19px',
            fontSize: '14px'
        }
    },

    content: {
        padding: 0
    }
});

const EditUser = ({user, editUser}) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const [mainPhone, additionalPhones] = user.contacts?.reduce((acc, contact) => {
        switch (contact.type) {
            case "MAIN":
                acc[0] = contact;
                break;
            case "ADDITIONAL":
                acc[1].push(contact);
                break;
        }

        return acc;
    }, [{phone: ''}, [{phone: ''}]]);

    const [formData, setFormData] = useState({
        name: user.name || '',
        phone: mainPhone,
        additionalPhone: additionalPhones,
        email: user.email || ''
    });


    const classes = useStyles();

    const handleChange = (e, additionalPhoneIndex = 0) => {
        const {name, value} = e.target;
        switch (name) {
            case 'phone':
                setFormData({
                    ...formData,
                    phone: {
                        ...formData.phone,
                        phone: value
                    }
                });
                break;
            case 'additionalPhone':
                setFormData({
                    ...formData,
                    additionalPhone: formData.additionalPhone.map((phone, index) => index === additionalPhoneIndex ? {
                        ...phone,
                        phone: value
                    } : phone)
                });
                break;
            default:
                setFormData({
                    ...formData,
                    [name]: value
                });
        }
    };

    const {name, phone, additionalPhone, email} = formData;


    const onSubmit = () => {
        setLoading(true);
        const [toDelete, toSave] = additionalPhone.reduce((acc, contact) => {
            if (contact.id && !contact.phone) {
                acc[0].push(contact.id);
            }

            if (contact.phone) {
                acc[1].push({...contact, phone: contact.phone.replace(/[^\d;]/g, ""), type: "ADDITIONAL"});
            }

            return acc;
        }, [[], []]);


        const saveData = {
            id: user.id,
            email,
            name,
            currency: "UAH",
            language: user.language,
            contacts: [{...phone, phone: phone.phone.replace(/[^\d;]/g, ""), type: "MAIN"}, ...toSave]
        };

        // const formData = Helpers.convertModelToFormData(saveData);
        const formData = new FormData();

        formData.append('id', saveData.id);
        formData.append('email', saveData.email);
        formData.append('name', saveData.name);
        // formData.append('currency', saveData.name);

        saveData.contacts.filter(contact => !toDelete.includes(contact.id)).forEach((i, index) => {
            if (i.id) formData.append(`contacts[${index}].id`, i.id);
            formData.append(`contacts[${index}].type`, i.type);
            formData.append(`contacts[${index}].phone`, i.phone);
        })

        const updateUser = (data) => {
            api({
                url: 'users',
                method: 'PUT',
                headers: {'Content-Type': 'multipart/form-data'},
                data
            }).then((data) => {
                editUser(data);
                setLoading(false);
            }).catch((e) => setLoading(false))
        }

        if (toDelete.length > 0) {
            const promises = toDelete.map((contactId) => api({
                method: 'DELETE',
                url: `contacts/${contactId}`
            }));
            Promise.all(promises)
                .then(() => {
                    toDelete.length = 0;
                    updateUser(formData);
                })
                .catch((e) => setLoading(false));
        } else {
            updateUser(formData);
        }
    };


    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header}>

            </CardHeader>
            <CardContent className={classes.content}>
                <TextField focused={false} InputLabelProps={{
                    shrink: true,
                }} className={classes.inputLabel} placeholder="Введіть ПІБ" onChange={handleChange} name="name"
                           value={name} label="П.І.Б"/>

                <InputMask
                    mask="+38(099)999-99-99"
                    disabled={false}
                    maskChar=" "
                    onChange={handleChange}
                    value={phone.phone}
                >
                    {() => <TextField focused={false} InputLabelProps={{
                        shrink: true,
                    }} placeholder="Введіть основний телефон" className={classes.inputLabel} name="phone"
                                      value={phone.phone} label="Телефон"/>}
                </InputMask>

                {additionalPhone.sort((a, b) => {
                    if (a.id && !b.id) return -1;
                    else return 1;
                }).map(({phone}, index) => (
                    <InputMask
                        key={index}
                        mask="+38(099)999-99-99"
                        disabled={false}
                        maskChar=" "
                        onChange={(e) => {
                            handleChange(e, index);
                        }}
                        value={phone}
                    >
                        {() => <TextField focused={false} placeholder="Введіть додатк. телефон" InputLabelProps={{
                            shrink: true,
                        }} className={classes.inputLabel} name="additionalPhone" value={phone}
                                          label="Додаткові телефони"/>}
                    </InputMask>
                ))}
                <TextField focused={false} placeholder="Введіть email" InputLabelProps={{
                    shrink: true,
                }} className={classes.inputLabel} onChange={handleChange} name="email" value={email} label="Email"/>
            </CardContent>
            <Button className={classes.buttonSubmit} onClick={onSubmit} variant="outlined">{loading ?
                <Loader size={20}/> : 'Відправити Адміністратору'}</Button>
        </Card>
    );
};

export default EditUser;