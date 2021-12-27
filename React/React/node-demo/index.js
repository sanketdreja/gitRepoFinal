const redux = require("redux");

//create a state
const initialState = {
  counter: 0,
};

//creating reducer which requires a state
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

// creatting state which requries reducer
const store = redux.createStore(reducer);
console.log(store);

// subcriber handler
const storeSubcriber = () => {
  const currentState = store.getState();
  console.log(currentState);
};

// Subcribe to the store
store.subscribe(storeSubcriber);

// Dispatcher
store.dispatch({ type: "increment", value: 5 });

store.dispatch({ type: "increment", value: 5 });

store.dispatch({ type: "decrement", value: 2 });
store.dispatch({ type: "multiply", value: 2 });
store.dispatch({ type: "multiply", value: 2 });
store.dispatch({ type: "division", value: 2 });
store.dispatch({ type: "division", value: 2 });
