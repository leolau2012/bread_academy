import Course from '../Course/Course';
import { Col, Row } from 'antd';
import CourseFilter from '../CourseFilter/CourseFilter';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCourses } from '../../redux/actions';
const mapStateToProps = state => {
  return {
    searchField: state.searchCourses.searchField,
    courses: state.requestCourses.courses,
    isPending: state.requestCourses.isPending,
    error: state.requestCourses.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCourses: () => dispatch(requestCourses())
  }
}
class CourseList extends Component {
  render() {
    const { searchField, courses } = this.props;
    const filterCourses = courses.filter(course => {
      return course.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div>
        <CourseFilter />
        <div className='courseList'>
          <Row>
            {
              filterCourses.map((course, i) => {
                return (
                  <Col sm={12} md={8} lg={6} xl={4} key={course.id}>
                    <Course
                      key={course.id}
                      id={course.id}
                      name={course.name}
                      goal={course.goal}
                      thumbnail={course.thumbnail}
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
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);



