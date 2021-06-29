import { PayloadPrima } from '../../../shared/models/prima';
import { createAction, props } from '@ngrx/store';

export const getPrima = createAction(
  '[PRIMA] Get Prima',
  props<{ id: number }>()
);

export const getPrimaSuccess = createAction(
  '[PRIMA] Get Prima Success',
  props<{ payload: PayloadPrima }>()
);

export const getPrimaError = createAction(
  '[PRIMA] Get Prima Error',
  props<{ error: any }>()
);
