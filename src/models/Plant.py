from enum import Enum
from models import Machinery
from pydantic import BaseModel, field_validator

class Plant(BaseModel):
    name: str
    location: str
    description: str
    machineries: list[str]



