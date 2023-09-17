import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {backendErrorsSelector} from "../store/selectors";


export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  backendErrors: any | null
}

