import React from 'react';
import { Card } from 'antd';
import './Teachers.css';
const { Meta } = Card;
const Teacher = ({id,name,vname,goal,thumbnail }) => {
  return (
      <Card
        hoverable
        style={{ margin: 6 }}
        cover={<img alt="example" src={thumbnail} />}
      >
        <Meta
          title={name}
          description={goal}
        />
      </Card>
  );
}

export default Teacher;
