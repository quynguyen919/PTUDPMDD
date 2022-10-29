import { createStore, combineReducers} from 'redux';
import cartReducer from './reducers/cartReducer';
import bookReducer from './reducers/bookReducer';
const rootReducer = combineReducers({
  cart: cartReducer,
  book: bookReducer,
});
 
export const store = createStore(rootReducer);

// npm install redux react-redux --save