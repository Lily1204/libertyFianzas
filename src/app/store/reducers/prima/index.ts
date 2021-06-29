import { combineReducers } from '@ngrx/store';
import * as fromGetPrima from './get-prima.reducer';

export const key = 'administrator';
export type State = {
  [fromGetPrima.key]: fromGetPrima.State;
};

export const reducer = combineReducers<State>({
  [fromGetPrima.key]: fromGetPrima.reducer,
});
