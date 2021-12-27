import { Component } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";

class Course extends Component {
  render() {
    return (
      <div className={"row"}>
        <div className={"col-md-5"}>
          <CourseForm />
        </div>
        <div className={"col-md-7"}>
          <CourseList />
        </div>
      </div>
    );
  }
}
export default Course;
