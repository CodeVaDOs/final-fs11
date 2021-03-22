import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Button, CardContent, CardHeader } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask"
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px 20px 25px',
    minWidth: '285px'
  },
  content: {
    padding: 0
  },

  textField: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '19px',
    color: '#6e7375'
  },

  buttonSubmit: {
    color: "#6e7375",
    fontSize: '14px',
    padding: '5px 5px',
    borderRadius: '5px',
    border: '0.5px solid #6e7375',
    marginTop: '18px'
  }
}));


const UserProfile = () => {
  const classes = useStyles();
  const { name } = useSelector(state => state.auth.user)


  const [formData, setFormData] = useState({
    name: name || '',
    phone: '',
    additionalPhone: '',
    email: ''
  });

  const onChangeFormData = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })

    console.log(formData);
  };

  const handleSubmit = () => {
    const formatedPhone = formData.phone.replace(/\D/g, '')
    console.log(formatedPhone);
  }

  return (
    <Card className={classes.root}>
      <CardHeader>
        <img src="" alt="User photo"/>
        <div>
          <img src="" alt="Earth icon"/>
          <p>Київ, Україна</p>
        </div>
      </CardHeader>
      <CardContent className={classes.content}>
        <FormGroup>
          <TextField className={classes.textField} onChange={onChangeFormData} name="name" value={formData.name} label="Ф.И.О."/>
          <InputMask disabled={false} onChange={(e) => {
            onChangeFormData({...e, target: {...e.target, name: 'phone'}})
          }} name="phone" value={formData.phone} mask="+38(099)999-99-99">
            {() => <TextField className={classes.textField} label="Телефон"/>}
          </InputMask>
          <TextField className={classes.textField} onChange={onChangeFormData} name="additionalPhone" value={formData.additionalPhone} label="Дополнительные телефоны"/>
          <TextField className={classes.textField} onChange={onChangeFormData} name="email" value={formData.email} label="Email"/>
          <Button className={classes.buttonSubmit} onClick={handleSubmit}>Відправити Адміністратору</Button>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default UserProfile;