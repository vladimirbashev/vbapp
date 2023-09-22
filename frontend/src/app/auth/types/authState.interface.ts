import {UserInterface} from "../../shared/types/user.interface";


export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: UserInterface | null
  isLoggedIn: boolean | null
  backendErrors: any
}

