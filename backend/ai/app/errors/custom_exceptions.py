from fastapi import HTTPException

class ValidationException(HTTPException):
    """
    ValidationException
    Custom exception for input validation errors.
    """
    def __init__(self, detail: str):
        super().__init__(status_code=400, detail=detail)


class ModelProcessingException(HTTPException):
    """
    ModelProcessingException
    Custom exception for errors during model processing.
    """
    def __init__(self, detail: str):
        super().__init__(status_code=500, detail=detail)
