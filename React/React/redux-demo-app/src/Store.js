import { Collapse } from "bootstrap";
import { createStore } from "redux";

const initialState = {
  personList: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PERSON_ADD":
      //   const personListCopy = [...state.personList];
      //   personListCopy.push(payload);
      //   const newState = { personList: personListCopy };
      //   return newState;
      const id = state.personList.length + 1;
      const payloadToBeAdded = { ...payload, id };
      return { personList: [...state.personList, payloadToBeAdded] };

    case "PERSON_DELETE":
      //   console.log(payload);
      //   console.log(state.personList);
      //   const personListCopy = [...state.personList];
      //   //   console.log(payload);
      //   personListCopy.splice(payload, 1);
      //   const newState = { personList: personListCopy };
      //   console.log(personListCopy);
      return {
        personList: [...[...state.personList].splice(payload)],
      };

    case "PERSON_UPDATE":
      const personListCopy = [...state.personList];
      let objectToBeUpdatedIndex = personListCopy.findIndex(
        (person) => person.id === payload.id
      );
      personListCopy[objectToBeUpdatedIndex] = {
        ...personListCopy[objectToBeUpdatedIndex],
        ...payload,
      };
      return { personList: personListCopy };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
