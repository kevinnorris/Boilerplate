// import { createSelector } from 'reselect';

export const selectClicks = state => {
  console.log(state);
  return state.home.clicks;
}
