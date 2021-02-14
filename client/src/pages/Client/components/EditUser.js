import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import { CardContent, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { Form } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    boxShadow: '2px 0px 3px rgba(0, 0, 0, 0.5)',
    borderRight: '1px solid #707070',
    borderBottom: '1px solid #707070',
    borderRadius: 0,
  }
})

const EditUser = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const fields = [
    {

    }
  ]

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader>

      </CardHeader>
      <CardContent>
        <TextAre>

        </TextAre>
      </CardContent>
    </Card>
  );
};

export default EditUser;