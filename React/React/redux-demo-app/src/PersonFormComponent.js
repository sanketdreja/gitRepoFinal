import { Component } from "react";
import { connect } from "react-redux";

class PersonFormComponent extends Component {
  state = {
    personName: "",
    personAge: 0,
  };

  onchangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.setState({
    //     [event.target.name]:event.target.value
    // });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addPerson(this.state);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              placeholder="Name"
              className="form-control"
              name={"personName"}
              value={this.state.personName}
              onChange={this.onchangeHandler}
            />
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              placeholder="Name"
              className="form-control"
              name={"personAge"}
              value={this.state.personAge}
              onChange={this.onchangeHandler}
            />
          </div>
          <br />
          <button type="submit" className={"btn-success "}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (payload) =>
      dispatch({
        type: "PERSON_ADD",
        payload: payload,
      }),
  };
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonFormComponent);
