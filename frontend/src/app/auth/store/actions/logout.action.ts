import {createAction, props} from '@ngrx/store'

import {ActionTypes} from 'src/app/auth/store/actionTypes'
import {TokenRequestInterface} from 'src/app/auth/types/tokenRequest.interface'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {TokenResponseInterface} from "../../types/tokenResponseInterface";


export const logoutAction = createAction(
  ActionTypes.LOGOUT
)

export const logoutSuccessAction = createAction(
  ActionTypes.LOGOUT_SUCCESS
)

export const logoutFailureAction = createAction(
  ActionTypes.LOGOUT_FAILURE,
  props<{error: any}>()
)
