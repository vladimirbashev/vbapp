import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/auth/store/actionTypes'
import {RegisterRequestInterface} from "../../types/registerRequest.interface";
import {UserInterface} from "../../../shared/types/user.interface";


export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{user: UserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{error: any}>()
)
