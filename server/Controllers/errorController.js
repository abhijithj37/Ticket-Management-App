const CustomError = require("../Utils/customError");

const devErrors = (res, error) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stackTrace: error.stack,
    error: error,
  });
};


const prodErrors = (res, error) => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Some thing went wrong please try again later!",
    });
  }
};


const validationError = (err) => {
  const errorMessage = err.message;
  return new CustomError(errorMessage, 400);
};


module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  if (process.env.NODE_ENV === "development") {
    devErrors(res, error);
  } else if (process.env.NODE_ENV === "production") {
    if (error.code === "22P02" || error.code === "22007")
      error = validationError(error);
    prodErrors(res, error);
  }
};
