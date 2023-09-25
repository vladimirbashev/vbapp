import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/auth/store/actionTypes'
import {UserInterface} from 'src/app/shared/types/user.interface'

export const currentUserAction = createAction(
  ActionTypes.CURRENT_USER
)

export const currentUserSuccessAction = createAction(
  ActionTypes.CURRENT_USER_SUCCESS,
  props<{user: UserInterface}>()
)

export const currentUserFailureAction = createAction(
  ActionTypes.CURRENT_USER_FAILURE,
  props<{detail: any}>()
)
