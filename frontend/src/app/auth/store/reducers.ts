import {createReducer, on, Action} from '@ngrx/store'
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/register.actions";
import {AuthStateInterface} from "../types/authState.interface";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login.action";


const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  backendErrors: null,
  isLoggedIn: null
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      backendErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      // isLoggedIn: true,
      // currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors: action.detail
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      backendErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      // currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors: action.detail
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
