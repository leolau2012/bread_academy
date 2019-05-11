import React from 'react';
import CourseList from '../components/CourseList/CourseList';
import ErrorBoundaries from '../components/ErrorBoundaries/ErrorBoundaries';
const HomePage = () => {
    return (
        <div>
            <ErrorBoundaries>
                <CourseList/>
            </ErrorBoundaries>
        </div>
    );
}
export default HomePage;


