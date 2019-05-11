import React from 'react';
import Course from '../Course/Course';
import { Col, Row } from 'antd';
const CourseList = ({ courses }) => {
  return (
    <div className='courseList'>
        <Row>
          {
            courses.map((course, i) => {
              return (
                <Col sm={12} md={8} lg={6} xl={4}  key={courses[i].id}>
                  <Course
                    key={courses[i].id}
                    id={courses[i].id}
                    name={courses[i].name}
                    goal={courses[i].goal}
                    thumbnail={courses[i].thumbnail}
                  />
                </Col>
              );
            })
          }
        </Row>
    </div>
  );
}

export default CourseList;