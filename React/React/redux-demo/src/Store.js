import { createStore } from "redux";

const initialState = {
  counter: 0,
};  

const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case "increment":
      return { counter: state.counter + value };

    case "decrement":
      return { counter: state.counter - value };

    case "multiply":
      return { counter: state.counter * value };

    case "division":
      return { counter: state.counter / value };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
