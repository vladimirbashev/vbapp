from fastapi import FastAPI
from routes import users, items, token
# from database import engine
# from models import users as users_models
# from models import items as items_models
#
# users_models.Base.metadata.create_all(bind=engine)
# items_models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(token.router, prefix='/api')
app.include_router(users.router, prefix='/api')
app.include_router(items.router, prefix='/api')

