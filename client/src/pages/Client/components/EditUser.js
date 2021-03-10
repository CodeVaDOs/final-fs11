import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import { CardContent, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Helpers from "../../../utils/formData";
import { AUTH_ACTIONS } from "../../../redux/auth/action";
import {useFetch} from "../../../hooks/useFetch";
import {useLocation} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    boxShadow: '2px 0px 3px rgba(0, 0, 0, 0.5)',
    borderRight: '1px solid #707070',
    borderBottom: '1px solid #707070',
    borderRadius: 0,
  }
});

const EditUser = ({user}) => {
  const dispatch = useDispatch();

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
  }, [{ phone: '' }, [{ phone: '' }]]);

  const [formData, setFormData] = useState({
    name: user.name || '',
    phone: mainPhone,
    additionalPhone: additionalPhones,
    email: user.email || ''
  });


  const classes = useStyles();

  const handleChange = (e, additionalPhoneIndex = 0) => {
    const { name, value } = e.target;
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
          additionalPhone: formData.additionalPhone.map((phone, index) => index === additionalPhoneIndex ? { ...phone, phone: value } : phone)
        });
        break;
      default:
        setFormData({
          ...formData,
          [name]: value
        });
    }
  };

  const { name, phone, additionalPhone, email } = formData;


  const onSubmit = () => {
    const [toDelete, toSave] = additionalPhone.reduce((acc, contact) => {
      if (contact.id && !contact.phone) {
        acc[0].push(contact.id);
      }

      if (contact.phone) {
        acc[1].push({ ...contact, phone: contact.phone.replace(/[^\d;]/g, ""), type: "ADDITIONAL" });
      }

      return acc;
    }, [[], []]);


    const saveData = {
      id: user.id,
      email,
      name,
      currency: "UAH",
      language: user.language,
      contacts: [{ ...phone, phone: phone.phone.replace(/[^\d;]/g, ""), type: "MAIN" }, ...toSave]
    };

    console.log("save data", saveData, user, toDelete)

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

    dispatch(AUTH_ACTIONS.updateUserWithDeleteContacts(formData, toDelete));
  };

  return (
    <Card className={classes.root}>
      <CardHeader>

      </CardHeader>
      <CardContent>
        <TextField onChange={handleChange} name="name" value={name} label="П.І.Б"/>

        <InputMask
          mask="+38(099)999-99-99"
          disabled={false}
          maskChar=" "
          onChange={handleChange}
          value={phone.phone}
        >
          {() => <TextField name="phone" value={phone.phone} label="Телефон"/>}
        </InputMask>

        {additionalPhone.sort((a,b) => {
          if (a.id && !b.id) return -1;
          else return 1;
        }).map(({ phone }, index) => (
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
            {() => <TextField name="additionalPhone" value={phone} label="Додаткові телефони"/>}
          </InputMask>
        ))}
        <TextField onChange={handleChange} name="email" value={email} label="Email"/>
      </CardContent>
      <Button onClick={onSubmit} variant="outlined">Відправити Адміністратору</Button>
    </Card>
  );
};

export default EditUser;