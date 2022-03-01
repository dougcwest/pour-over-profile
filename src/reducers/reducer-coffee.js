import { FETCH_COFFEE } from "../actions";

//can replace this with your coffee data 
const defaultState = [
  {
    id: 1,
    title: "Starting 2021 Right",
    categories: ["health"],
    content: "I'm stating 2021 off the right way!",
  },
  {
    id: 2,
    title: "Learn to Code",
    categories: ["career"],
    content: "I'm learning to code!",
  },
  {
    id: 3,
    title: "Get Rich Quick!",
    categories: ["finances"],
    content: "Save your money!",
  },
];

const coffeeReducer = function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_COFFEE:
      return state;
    default:
      return state;
  }
};

export default coffeeReducer;