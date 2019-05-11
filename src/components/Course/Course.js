import React from 'react';
import { Card } from 'antd';
import './Course.css';
const { Meta } = Card;
const Course = ({ name, goal, id, thumbnail }) => {
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

export default Course;
