import { createStore } from "redux";
const initialState = {
  courseList: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "COURSE_ADD":
      return { courseList: [...state.courseList, payload] };
    case "COURSE_DELETE":
      // console.log(payload);
      // const newStateObject = [...state.courseList];
      // newStateObject.splice(payload, 1);
      return {
        courseList: state.courseList.filter(
          (course, index) => index !== payload
        ),
      };
    case "COURSE_EDIT":
      return;
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
