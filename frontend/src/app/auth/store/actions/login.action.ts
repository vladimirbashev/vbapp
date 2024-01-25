import {createAction, props} from '@ngrx/store'

import {ActionTypes} from 'src/app/auth/store/actionTypes'
import {TokenRequestInterface} from 'src/app/auth/types/tokenRequest.interface'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {TokenResponseInterface} from "../../types/tokenResponseInterface";


export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: TokenRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{token: TokenResponseInterface}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{error: any}>()
)
