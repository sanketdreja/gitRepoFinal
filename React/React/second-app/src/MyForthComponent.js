export default (props) => {
    const { name, age,parentComponentName } = props;
    console.log(name);
    console.log(age);
    return (
      <>
        <h2>
         I am inside MyThirdComponent from {parentComponentName}
      </h2>
        <h2>
          Hello I am {name}, I am {age} years old and I am inside MyFourthComponent
        </h2>
      </>
    );
  };
  