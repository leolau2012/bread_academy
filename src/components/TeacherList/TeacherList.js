import React, { Component } from 'react';
import Teacher from '../Teacher/Teacher';
import { Col, Row } from 'antd';
class TeacherList extends Component {
  constructor() {
    super()
    this.state = {
      teachers: []
    }
  }
  componentDidMount() {
    fetch('https://easy-mock.com/mock/5cb55a1c93eb412c8916b994/react_web/teachers')
      .then(response => response.json())
      .then(teacherData => {
        this.setState({ teachers: teacherData })
      });
  }
  render() {
    const teachers = this.state.teachers;
    return (
      <div>
        <div className='courseList'>
          <Row>
            {
              teachers.map((teacher, i) => {
                return (
                  <Col sm={12} md={8} lg={6} xl={4} key={teacher.id}>
                    <Teacher
                      key={teacher.id}
                      id={teacher.id}
                      name={teacher.name}
                      goal={teacher.goal}
                      thumbnail={teacher.thumbnail}
                    />
                  </Col>
                );
              })
            }
          </Row>
        </div>
      </div>
    );
  };
}

export default TeacherList;