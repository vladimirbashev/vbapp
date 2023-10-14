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
    createdat: datetime
    updatedat: datetime
    bio: Optional[str] = None
    image: Optional[str] = None
    items: list[Item] = []

    class Config:
        orm_mode = True
