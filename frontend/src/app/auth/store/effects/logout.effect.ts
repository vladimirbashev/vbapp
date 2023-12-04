import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, tap} from 'rxjs/operators'

import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {
  logoutAction,
  logoutSuccessAction,
  logoutFailureAction
} from 'src/app/auth/store/actions/logout.action'
import {Router} from "@angular/router";


@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      map(() => {
        this.persistanceService.remove('accessToken')
        return logoutSuccessAction()
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
