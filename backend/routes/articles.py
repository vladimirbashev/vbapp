from collections import namedtuple
from fastapi import Depends, APIRouter
from crud import articles as crud
from schemas import articles as schemas
from sqlalchemy.orm import Session

from config import get_db

router = APIRouter()

@router.get("/articles/", response_model=schemas.Articles)
def read_articles(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    articles = crud.get_articles(db, skip=skip, limit=limit)
    count = crud.get_articles_count(db)

    ArticlesResponse = namedtuple('ArticlesResponse', ['items', 'count'])
    return ArticlesResponse(articles, count)


@router.post("/users/{user_id}/articles/", response_model=schemas.Article)
def create_article_for_user(
    user_id: int, article: schemas.ArticleCreate, db: Session = Depends(get_db)
):
    return crud.create_user_article(db=db, article=article, user_id=user_id)
