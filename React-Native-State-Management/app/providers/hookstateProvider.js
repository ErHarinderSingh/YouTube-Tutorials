import {createState, useState} from '@hookstate/core';

const initialState = createState({
  count: 0,
});

export const useGlobalState = () => {
  const state = useState(initialState);
  return {
    getCount: () => state.count.value,
    increment: () => {
      state.count.set(count => count + 1);
    },
    decrement: () => {
      state.count.set(count => count - 1);
    },
  };
};
