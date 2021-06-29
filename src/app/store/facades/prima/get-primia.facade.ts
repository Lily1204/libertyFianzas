import { Injectable } from '@angular/core';
import { PayloadPrima } from '../../../shared/models/prima';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPrima } from '../../actions/prima/get-prima.actions';
import { fetchEntityList } from '../../selectors/prima/get-prima.selectors';

@Injectable({ providedIn: 'root' })
export class GetPrimaFacade {
  constructor(private store: Store) {}

  entityList$: Observable<PayloadPrima> = this.store.pipe(
    select(fetchEntityList)
  );

  getPrimaAction(id: number) {
    this.store.dispatch(getPrima({ id }));
  }
}
