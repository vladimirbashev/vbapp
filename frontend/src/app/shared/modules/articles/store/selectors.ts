import {createFeatureSelector, createSelector} from '@ngrx/store'

import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {ArticlesStateInterface} from 'src/app/shared/modules/articles/types/articlesState.interface'

export const articlesFeatureSelector = createFeatureSelector<
  ArticlesStateInterface
>('articles')

export const isLoadingSelector = createSelector(
  articlesFeatureSelector,
  (articlesState: ArticlesStateInterface) => articlesState.isLoading
)

export const errorSelector = createSelector(
  articlesFeatureSelector,
  (articlesState: ArticlesStateInterface) => articlesState.error
)

export const articlesSelector = createSelector(
  articlesFeatureSelector,
  (articlesState: ArticlesStateInterface) => articlesState.data
)
