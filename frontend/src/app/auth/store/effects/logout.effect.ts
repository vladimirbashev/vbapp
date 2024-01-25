import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {catchError, map, tap} from 'rxjs/operators'

import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {
  logoutAction,
  logoutSuccessAction,
  logoutFailureAction
} from 'src/app/auth/store/actions/logout.action'
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";


@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      map(() => {
        this.persistanceService.remove('accessToken')
        return logoutSuccessAction()
      }),

      catchError((errorResponse: HttpErrorResponse) => {
        return of(logoutFailureAction({detail: errorResponse.error.detail || errorResponse.error}))
      })
    )
  )

  redirectAfterLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/login')
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private persistanceService: PersistanceService,
  ) {}
}
