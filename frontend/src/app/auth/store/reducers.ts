import {createReducer, on, Action} from '@ngrx/store'
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/register.actions";
import {AuthStateInterface} from "../types/authState.interface";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login.action";
import {logoutAction, logoutFailureAction, logoutSuccessAction} from "./actions/logout.action";
import {currentUserAction, currentUserFailureAction, currentUserSuccessAction} from "./actions/currentUser.action";


const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  error: null,
  isLoggedIn: null
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    logoutSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: null,
      currentUser: null
    })
  ),
  on(
    logoutFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error
    })
  ),
  on(
    currentUserAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    currentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.user
    })
  ),
  on(
    currentUserFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
