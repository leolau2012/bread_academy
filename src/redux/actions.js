import {
    CHANGE_SEARCH_fIELD,
    REQUEST_COURSES_PENDING,
    REQUEST_COURSES_SUCCESS,
    REQUEST_COURSES_FAILED
} from './constants.js';
import { getFetch } from '../services/services'
export const setSearchField = (text)=>({
    type:CHANGE_SEARCH_fIELD,
    payload:text
});

export const requestCourses = () => (dispatch) => {
    dispatch({ type: REQUEST_COURSES_PENDING })
    getFetch('https://easy-mock.com/mock/5cb55a1c93eb412c8916b994/react_web/courses')
      .then(data => dispatch({ type: REQUEST_COURSES_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_COURSES_FAILED, payload: error }))
  }