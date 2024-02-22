import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {errorSelector, articlesSelector, isLoadingSelector, articlesCountSelector} from "../../store/selectors";
import {getArticlesAction} from "../../store/actions/getArticlesAction";
import {ArticleInterface} from "../../../../types/article.interface";
import {PageEvent} from "@angular/material/paginator";
import queryString from "query-string";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string
  articles$: Observable<ArticleInterface[] | null>
  articlesCount$: Observable<number>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData(0, 10);
  }

  initializeValues(): void {
    this.articles$ = this.store.pipe(select(articlesSelector))
    this.articlesCount$ = this.store.pipe(select(articlesCountSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  fetchData(skip: number, limit: number): void {
    const parsedUrl = queryString.parseUrl(this.apiUrlProps)
    const stringifiedParams = queryString.stringify({
      limit: limit,
      skip,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getArticlesAction({url: apiUrlWithParams}))
  }

  handlePageEvent(e: PageEvent) {
    this.fetchData(e.pageIndex *  e.pageSize, e.pageSize)
  }
}
