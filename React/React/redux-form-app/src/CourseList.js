import { Component } from "react";
import { connect } from "react-redux";

class CourseList extends Component {
  render() {
    return (
      <div>
        <table className={"table"}>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Course Name</th>
              <th>Course Fees</th>

              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {this.props.courseList.map((course, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course.courseName}</td>
                  <td>{course.courseFees}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.deleteCourse(index);
                        alert("Deleted");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCourse: (payload) =>
      dispatch({
        type: "COURSE_DELETE",
        payload: payload,
      }),
  };
};
const mapStateToProps = (state) => {
  return { courseList: state.courseList };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
