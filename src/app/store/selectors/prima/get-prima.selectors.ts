import { createSelector } from '@ngrx/store';
import { selectPrima } from '.';

export const statePrima = createSelector(
  selectPrima,
  (state) => state.getPrima
);

export const fetchEntityList = createSelector(statePrima, (state) =>
  state.data ? state.data : null
);

export const selectLaoding = createSelector(
  statePrima,
  (state) => state.loading
);
