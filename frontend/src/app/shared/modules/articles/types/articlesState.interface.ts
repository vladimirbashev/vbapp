import {ArticleInterface} from "../../../types/article.interface";

export interface ArticlesStateInterface {
  isLoading: boolean
  error: string | null
  data:  ArticleInterface[] | null
}
