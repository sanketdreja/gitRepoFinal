import { Component } from "react";
import { connect } from "react-redux";

class PersonListComponent extends Component {
  state = {
    personObject: null,
  };
  onEditClickHandler = (person) => {
    this.setState({ personObject: person });
  };
  onValuehangehandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      personObject: { ...this.state.personObject, [name]: value },
    });
  };

  onUpdateClickHandler = () => {
    this.props.updatePerson({ ...this.state.personObject });
    this.onResetClickhandler();
    alert("Updated");
  };
  onResetClickhandler = () => {
    console.log("reset Click");
    this.setState({ personObject: null });
  };

  render() {
    console.log(this.props.personList);
    return (
      <>
        <table className={"table table-bordered"}>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.personList.map((person, index) => {
              return (
                <tr key={person.id}>
                  <td>{index + 1} </td>
                  <td>
                    {this.state.personObject != null &&
                    this.state.personObject.id === person.id ? (
                      <input
                        name={"personName"}
                        value={this.state.personObject.personName}
                        onChange={this.onValuehangehandler}
                      />
                    ) : (
                      <>{person.personName}</>
                    )}
                  </td>
                  <td>
                    {this.state.personObject != null &&
                    this.state.personObject.id === person.id ? (
                      <input
                        name={"personAge"}
                        value={this.state.personObject.personAge}
                        onChange={this.onValuehangehandler}
                      />
                    ) : (
                      <>{person.personAge}</>
                    )}
                  </td>
                  <td>
                    {this.state.personObject != null &&
                    this.state.personObject.id === person.id ? (
                      <>
                        {" "}
                        <button onClick={this.onUpdateClickHandler}>
                          update
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            this.onEditClickHandler(person);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    {this.state.personObject != null &&
                    this.state.personObject.id === person.id ? (
                      <>
                        <button onClick={this.onResetClickhandler}>
                          Reset
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            this.props.deletePerson(index);

                            alert("Deleted");
                          }}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { personList: state.personList };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePerson: (index) =>
      dispatch({
        type: "PERSON_DELETE",
        payload: index,
      }),

    updatePerson: (personObject) =>
      dispatch({
        type: "PERSON_UPDATE",
        payload: personObject,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonListComponent);
