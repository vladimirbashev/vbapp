import {createReducer, on, Action} from '@ngrx/store'
import {
  getArticlesAction,
  getArticlesSuccessAction,
  getArticlesFailureAction
} from 'src/app/shared/modules/articles/store/actions/getArticlesAction'
import {ArticlesStateInterface} from "../types/articlesState.interface";

const initialState: ArticlesStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const articlesReducer = createReducer(
  initialState,
  on(
    getArticlesAction,
    (state): ArticlesStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticlesSuccessAction,
    (state, action): ArticlesStateInterface => ({
      ...state,
      isLoading: false,
      data: action.articles
    })
  ),
  on(
    getArticlesFailureAction,
    (state): ArticlesStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers(state: ArticlesStateInterface, action: Action) {
  return articlesReducer(state, action)
}
