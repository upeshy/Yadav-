import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  products: [],
  cart: [],
  user: null,
  loading: false
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
