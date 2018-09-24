export const state = () => ({
  counter: 0,
});

export const mutations = {
  increment: state => state.counter += 1,
  decrement: state => state.counter -= 1,
};
