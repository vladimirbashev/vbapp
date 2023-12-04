import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import {ArticlesService} from 'src/app/shared/modules/articles/services/articles.service'
import {
  getArticlesAction,
  getArticlesSuccessAction,
  getArticlesFailureAction
} from 'src/app/shared/modules/articles/store/actions/getArticlesAction'
import {ArticleInterface} from "../../../../types/article.interface";


@Injectable()
export class GetArticlesEffect {
  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticlesAction),
      switchMap(({url}) => {
        return this.articlesService.getArticles(url).pipe(
          map((articles:  ArticleInterface[]) => {
            return getArticlesSuccessAction({articles})
          }),

          catchError(() => {
            return of(getArticlesFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private articlesService: ArticlesService) {}
}
