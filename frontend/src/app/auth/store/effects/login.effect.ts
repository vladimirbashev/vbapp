import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import {AuthService} from 'src/app/auth/services/auth.service'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction
} from 'src/app/auth/store/actions/login.action'
import {TokenResponseInterface} from "../../types/tokenResponseInterface";

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((token: TokenResponseInterface) => {
            this.persistanceService.set('accessToken', token.access_token)
            return loginSuccessAction({token})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({detail: errorResponse.error.detail}))
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
