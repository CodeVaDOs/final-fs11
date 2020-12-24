import React from 'react';
import { Card } from 'antd';

const Container = (props) => {
  return (
    <Card {...props}>
      {props.children}
    </Card>
  );
};

export default Container;
