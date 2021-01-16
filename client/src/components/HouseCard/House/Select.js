import React from "react";

import "./styles.css";

export const Select = (props) => {
  this.state = {
    category: [],
    post: {
      author: "",
      title: "",
      blogText: "",
      dateTime: "",
      categoryId: ""
    }
  };

  const handleOnChange = (key, e) => {
    console.log(e.target.value);
    let post = this.state.post;
    post[key] = e.target.value; // key variable can be a string
    console.log(this.state);
  };

  return (
    <div>
      <select onChange={e => this.handleOnChange('categoryId', e)}>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Mercedes</option>
        <option value="4">Volvo</option>
      </select>
    </div>
  );
};

