import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromGetPrima from './prima';

export type AppState = {
  [fromGetPrima.key]: fromGetPrima.State;
};

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState>>(
  'Root reducers token',
  {
    factory: () => ({
      [fromGetPrima.key]: fromGetPrima.reducer,
    }),
  }
);
