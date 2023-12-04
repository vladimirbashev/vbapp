from fastapi import FastAPI
from routes import users, articles, token
# from database import engine
# from models import users as users_models
# from models import articles as articles_models
#
# users_models.Base.metadata.create_all(bind=engine)
# articles_models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(token.router, prefix='/api')
app.include_router(users.router, prefix='/api')
app.include_router(articles.router, prefix='/api')

