import {UserInterface} from "./user.interface";

export interface ArticleInterface {
  description: string
  title: string
  author: UserInterface
  slug: string
  createdat: string
  updatedat: string
  // body: string
  // tagList: string[]
  // favorited: boolean
  // favoritesCount: number
}
