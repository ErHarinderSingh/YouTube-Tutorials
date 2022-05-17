import {createStore, action} from 'easy-peasy';

export default createStore({
  count: 0,
  increment: action((state, payload) => {
    state.count = state.count + 1;
  }),
  decrement: action((state, payload) => {
    state.count = state.count - 1;
  }),
});
