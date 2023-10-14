from fastapi import FastAPI
from database import engine
from routes import users, items, token

app = FastAPI()
app.include_router(token.router, prefix='/api')
app.include_router(users.router, prefix='/api')
app.include_router(items.router, prefix='/api')

