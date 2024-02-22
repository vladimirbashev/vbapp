import {UserInterface} from "./user.interface";

export interface ArticleInterface {
  description: string
  title: string
  author: UserInterface
  slug: string
  createdate: string
  updatedate: string
  // body: string
  // tagList: string[]
  // favorited: boolean
  // favoritesCount: number
}

export interface ArticlesInterface {
  items: ArticleInterface[]
  count: number
}
