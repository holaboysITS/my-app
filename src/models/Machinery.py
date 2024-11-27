from pydantic import BaseModel,field_validator
import Status

class Machinery(BaseModel):
    plant_id: int 
    name : str
    type : str
    status : Status
    specifications : str
    