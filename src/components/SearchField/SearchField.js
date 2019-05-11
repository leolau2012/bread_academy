import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import './SearchField.css';
import { connect } from 'react-redux';
import { setSearchField, requestCourses } from '../../redux/actions';
const Search = Input.Search;
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
class SearchField extends Component {
    render() {
        const { onSearchChange } = this.props;
        return (
            <div className='searchField'>
                <Row type="flex" justify="center">
                    <Col span={16}>
                        <Search
                            placeholder="请输入要找的课程"
                            onChange={onSearchChange}
                            enterButton
                            size="large"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchField);

