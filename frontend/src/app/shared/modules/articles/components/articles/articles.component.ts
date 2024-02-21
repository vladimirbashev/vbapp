import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {errorSelector, articlesSelector, isLoadingSelector} from "../../store/selectors";
import {getArticlesAction} from "../../store/actions/getArticlesAction";
import {ArticleInterface} from "../../../../types/article.interface";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string

  articles$: Observable<ArticleInterface[] | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.articles$ = this.store.pipe(select(articlesSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  fetchData(): void {
    this.store.dispatch(getArticlesAction({url: this.apiUrlProps}))
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    // this.pageEvent = e;
    // this.length = e.length;
    // this.pageSize = e.pageSize;
    // this.pageIndex = e.pageIndex;
  }
}
