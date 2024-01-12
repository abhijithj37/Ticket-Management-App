const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const tickets = require("./routes/tickets");
const CustomError = require("./Utils/customError");
const errorHandler = require("./Controllers/errorController");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/tickets", tickets);

app.all("*", (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404
  );
  next(err);
});
app.use(errorHandler);

module.exports = app;
