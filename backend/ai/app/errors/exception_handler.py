from fastapi import Request
from fastapi.responses import JSONResponse
from .custom_exceptions import ValidationException, ModelProcessingException

async def validation_exception_handler(request: Request, exc: ValidationException):
    """
    Handle ValidationException
    Returns a structured JSON response for validation errors.
    """
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail, "error": "Validation Error"},
    )

async def model_exception_handler(request: Request, exc: ModelProcessingException):
    """
    Handle ModelProcessingException
    Returns a structured JSON response for model processing errors.
    """
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail, "error": "Model Processing Error"},
    )
