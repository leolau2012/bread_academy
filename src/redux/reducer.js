import {
    CHANGE_SEARCH_fIELD,
    REQUEST_COURSES_PENDING,
    REQUEST_COURSES_SUCCESS,
    REQUEST_COURSES_FAILED
} from './constants.js';
const inialState = {
    searchField: ''
}
export const searchCourses = (state = inialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_fIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}
const initialStateCourses = {
    courses: [],
    isPending: false,
    error:''
  }
export const requestCourses = (state=initialStateCourses, action={}) => {
    switch (action.type) {
      case REQUEST_COURSES_PENDING:
        return {...state,isPending: true}
      case REQUEST_COURSES_SUCCESS:
        return {...state,courses: action.payload,isPending: false}
      case REQUEST_COURSES_FAILED:
        return {...state,error: action.payload}
      default:
        return state
    }
  }