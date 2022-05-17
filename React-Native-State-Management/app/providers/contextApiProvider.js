import {createContext} from 'react';

// State
export const initialState = {
  count: 0,
};

export const CounterContext = createContext(initialState);

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
export const counter = (state = initialState, action) => {
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
