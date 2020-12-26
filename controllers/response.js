import HttpStatus from 'http-status';

const response = (data, resp, code = HttpStatus.OK) => {
  resp.status(code);
  resp.json(data || {});
};

const errorResponse = (
  message,
  resp,
  code = HttpStatus.BAD_REQUEST,
) => response({
  error: message,
},
resp,
code);

export {
  response,
  errorResponse,
};
