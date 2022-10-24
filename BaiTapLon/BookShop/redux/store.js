import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
import cartReducer from './reducers/cartReducer';
import bookReducer from './reducers/bookReducer';
const rootReducer = combineReducers({
  count: CountReducer,
  cart: cartReducer,
  book: bookReducer,
});
 
export const store = createStore(rootReducer);

// npm install redux react-redux --save