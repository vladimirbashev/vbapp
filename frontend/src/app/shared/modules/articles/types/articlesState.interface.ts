import {ArticleInterface} from "../../../types/article.interface";

export interface ArticlesStateInterface {
  isLoading: boolean
  error: any
  data:  ArticleInterface[] | null
}
