from sqlalchemy.orm import Session

from schemas import articles as schemas
from models import articles as models


def get_articles(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Article).order_by(models.Article.id).offset(skip).limit(limit).all()


def get_articles_count(db: Session):
    return db.query(models.Article).count()


def create_user_article(db: Session, article: schemas.ArticleCreate, user_id: int):
    db_article = models.Article(**article.dict(), author_id=user_id)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article
