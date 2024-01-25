from pydantic import BaseModel
from schemas.users import User
from datetime import datetime


class ArticleBase(BaseModel):
    title: str
    description: str | None = None


class ArticleCreate(ArticleBase):
    pass


class Article(ArticleBase):
    id: int
    author: User
    slug: str
    createdate: datetime
    updatedate: datetime

    class Config:
        orm_mode = True
