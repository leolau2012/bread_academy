import React from 'react';
import TeacherList from '../components/TeacherList/TeacherList';
import ErrorBoundaries from '../components/ErrorBoundaries/ErrorBoundaries';
const TeachersPage = () => {
    return (
        <div>
            <ErrorBoundaries>
                <TeacherList />
            </ErrorBoundaries>
        </div>
    );
}
export default TeachersPage;


