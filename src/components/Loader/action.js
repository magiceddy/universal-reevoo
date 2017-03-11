import { START_LOADING, END_LOADING } from './const';

export const startLoader = () => ({
  type: START_LOADING
});

export const endLoader = () => ({
  type: END_LOADING
});
