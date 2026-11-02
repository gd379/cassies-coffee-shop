
const errorHandler = (err, req, res, next) => {
  const statusCode =
    Number.isInteger(err.status) &&
    err.status >= 400 &&
    err.status <= 599
      ? err.status
      : 500;

  const response = {
    success: false,
    message:
      statusCode === 500
        ? "Internal Server Error"
        : err.message,
  };

  if (err.details && statusCode === 400) {
    response.errors = err.details;
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;
