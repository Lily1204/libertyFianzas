import { mutableOn } from 'ngrx-etc';
import { Action, createReducer } from '@ngrx/store';
import {
  getPrima,
  getPrimaError,
  getPrimaSuccess,
} from '../../actions/prima/get-prima.actions';

export const key = 'getPrima';

export type State = {
  loading: boolean;
  data: any;
  error: any;
};

const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

export function reducer(originalState: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(getPrima, (state) => {
      state.error = null;
      state.loading = true;
    }),
    mutableOn(getPrimaSuccess, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    }),
    mutableOn(getPrimaError, (state, { error }) => {
      state.error = error;
      state.loading = false;
    })
  )(originalState, action);
}
