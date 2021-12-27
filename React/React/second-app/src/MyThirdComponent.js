// function MyThirdComponent(props) {
//     const { name, age } = props;
//     console.log(name);
//     console.log(age);
//     return <>
//     <h2>
//         Hello I am {name}, I am {age} years old and I am inside MyThirdComponent
//     </h2>
//     </>;
//   };
// export default MyThirdComponent;

export default (props) => {
  const { name, age, children, parentComponentName } = props;
  console.log(name);
  console.log(age);
  return (
    <>
      <h2>
         I am inside MyThirdComponent from {parentComponentName}
      </h2>

      <h2>
        Hello I am {name}, I am {age} years old and I am inside MyThirdComponent
      </h2>
      {children}
      {/* {parentComponentName} */}
      {/* children name is hard coded so we can cannot change the children to
      child or something else */}
    </>
  );
};
