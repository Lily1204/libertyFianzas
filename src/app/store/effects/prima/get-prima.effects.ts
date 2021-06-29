import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  getPrima,
  getPrimaError,
  getPrimaSuccess,
} from '../../actions/prima/get-prima.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PrimaService } from 'src/app/shared/services/prima.service';

@Injectable()
export class GetPrimaEffects {
  constructor(
    private actions$: Actions,
    private primaService: PrimaService,
    private snackbar: MatSnackBar
  ) {}

  getPrima$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPrima),
      switchMap(({ id }) =>
        this.primaService.getPrima(id).pipe(
          map((response) => getPrimaSuccess({ payload: response })),
          catchError((error) => of(getPrimaError({ error })))
        )
      )
    );
  });

  getPrimaSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getPrimaSuccess),
        tap(() => {})
      );
    },
    { dispatch: false }
  );

  getPrimaError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getPrimaError),
        tap(() => {
          this.snackbar.open('Ha ocurrido un error al cargar los datos', null, {
            panelClass: 'error',
          });
        })
      );
    },
    { dispatch: false }
  );
}
