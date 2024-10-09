const unknownEndpoint = (req, res) => {
  res.status(400).send({ error: "unknow endpoint" });
};

const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  res.status(500);
  res.json({
    message: error.message,
  });
};

const requestLogger = (req, res, next) => {
  console.log("Method: ", req.method);
  console.log("Path: ", req.path);
  console.log("Body: ", req.body);
  console.log("---");
  next();
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
