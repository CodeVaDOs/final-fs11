import React from 'react';
import { Card } from 'antd';

const Container = (props) => {
  return (
    <Card {...props} style={{ borderRadius: 6, minHeight: "100vh", ...props.style }}>
      {props.children}
    </Card>
  );
};

export default Container;
