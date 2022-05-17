import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
// State
const initialState = {
  count: 0,
};

// Actions
export const IncrementCount = () => {
  return {
    type: 'INCREMENT_COUNT',
  };
};
export const DecrementCount = () => {
  return {
    type: 'DECREMENT_COUNT',
  };
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  counter,
});

// Persistance Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store
export default () => {
  let reduxStore = createStore(persistedReducer);
  let persister = persistStore(reduxStore);
  return {reduxStore, persister};
};
