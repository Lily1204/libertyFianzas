import { createFeatureSelector } from '@ngrx/store';
import { key, State } from '../../reducers/prima';

export const selectPrima = createFeatureSelector<State>(key);
