import { createStore } from "redux";
const store = createStore();

const initialState = {
  count: 1,
};

const reducer = (state = initialState) => {
  return state;
}

export default store;
