import { Component } from "react";
import { connect } from "react-redux";

class CourseForm extends Component {
  state = {
    courseName: "",
    courseFees: 0,
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.courseAdd(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmitHandler}>
          <label>Course Name</label>
          <input
            name={"courseName"}
            value={this.state.courseName}
            onChange={this.onChangeHandler}
          />

          <label>Course Fees</label>
          <input
            name={"courseFees"}
            value={this.state.courseFees}
            onChange={this.onChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    courseAdd: (payload) =>
      dispatch({
        type: "COURSE_ADD",
        payload: payload,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);
