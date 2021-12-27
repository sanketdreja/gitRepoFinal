export default (props) => {
  const { value, onClickHandler } = props;
  return (
    <>
      <h1>In Decrement</h1>
      Value:{value}
      <button onClick={onClickHandler}>Decrement</button>
    </>
  );
};
