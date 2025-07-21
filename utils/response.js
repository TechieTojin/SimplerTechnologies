// For successful responses
const successResponse = (message, data = null) => {
  return { success: true, message, data };
};

const sendError = (res, message, statusCode) => {
  const err = { message, statusCode };

  // Removed sendErrorToSlack call
  console.error(`Error: ${message} (Status: ${statusCode})`);

  return res.status(statusCode).json(errorResponse(message));
};

// For error responses
const errorResponse = (message) => {
  return { success: false, message };
};

module.exports = {
  successResponse,
  sendError,
  errorResponse,
};
