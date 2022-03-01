import { combineReducers } from 'redux';
import coffeeReducer from './reducer-coffee';

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export default rootReducer;