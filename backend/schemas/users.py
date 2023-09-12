from datetime import datetime

from pydantic import BaseModel
from typing import Optional
from schemas.items import Item


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str
    username: str


class User(UserBase):
    id: int
    createdAt: datetime
    updatedAt: datetime
    bio: Optional[str] = None
    image: Optional[str] = None
    token: str
    items: list[Item] = []

    class Config:
        orm_mode = True
