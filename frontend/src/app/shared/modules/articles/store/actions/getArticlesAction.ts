import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/shared/modules/articles/store/actionTypes'
import {ArticleInterface} from "../../../../types/article.interface";

export const getArticlesAction = createAction(
  ActionTypes.GET_ARTICLES,
  props<{url: string}>()
)

export const getArticlesSuccessAction = createAction(
  ActionTypes.GET_ARTICLES_SUCCESS,
  props<{articles: ArticleInterface[]}>()
)

export const getArticlesFailureAction = createAction(ActionTypes.GET_ARTICLES_FAILURE)
