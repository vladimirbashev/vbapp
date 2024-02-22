import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Injectable} from "@angular/core";
import {ArticleInterface, ArticlesInterface} from "../../../types/article.interface";

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles(url: string): Observable<ArticlesInterface> {
    const fullUrl = environment.apiUrl + url
    return this.http.get<ArticlesInterface>(fullUrl)
  }
}
