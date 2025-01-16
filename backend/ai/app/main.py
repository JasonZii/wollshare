from fastapi import FastAPI
from app.errors.custom_exceptions import ValidationException
from app.errors.exception_handler import validation_exception_handler

app = FastAPI()

# Register the exception handler
app.add_exception_handler(ValidationException, validation_exception_handler)

