export default (props) => {
  // const [value,setValue]=useState(0);
  // const onclickHandler=()=>{
  //     setValue(value+1);
  // };
  return (
    <>
      <h1>In Increment</h1>
      Value :{props.value}
      <button onClick={props.onClickHandler}>Increment</button>
    </>
  );
};
