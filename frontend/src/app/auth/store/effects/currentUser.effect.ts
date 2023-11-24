import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import {AuthService} from 'src/app/auth/services/auth.service'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {
  currentUserAction,
  currentUserSuccessAction,
  currentUserFailureAction
} from 'src/app/auth/store/actions/currentUser.action'
import {UserInterface} from "../../../shared/types/user.interface";


@Injectable()
export class CurrentUserEffect {
  currentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currentUserAction),
      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((user: UserInterface) => {
            return currentUserSuccessAction({user})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(currentUserFailureAction({detail: errorResponse.error.detail}))
          })
        )
      })
    )
  )

  // currentUserFailure$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(currentUserFailureAction),
  //     tap(() => {
  //       this.persistanceService.set('accessToken', null)
  //     })
  //   ),
  //   {dispatch: false}
  // )

  // redirectAfterSubmit$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(currentUserSuccessAction),
  //       tap(() => {
  //         this.router.navigateByUrl('/')
  //       })
  //     ),
  //   {dispatch: false}
  // )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistanceService,
  ) {}
}
