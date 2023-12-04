import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Injectable} from "@angular/core";
import {ArticleInterface} from "../../../types/article.interface";

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles(url: string): Observable<ArticleInterface[]> {
    const fullUrl = environment.apiUrl + url
    return this.http.get<ArticleInterface[]>(fullUrl)
  }
}
