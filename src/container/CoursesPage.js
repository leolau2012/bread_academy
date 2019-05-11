import React from 'react';
import CourseList from '../components/CourseList/CourseList';
import SearchField from '../components/SearchField/SearchField';
import ErrorBoundaries from '../components/ErrorBoundaries/ErrorBoundaries';
const CoursesPage = () => {
    return (
        <div>
            <SearchField />
            <ErrorBoundaries>
                <CourseList />
            </ErrorBoundaries>
        </div>
    );
}
export default CoursesPage;


