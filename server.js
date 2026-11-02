const express = require("express");
const logger = require("./middleware/logger");
const itemRoutes = require("./routes/itemRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// Custom request logging middleware
app.use(logger);
// Built-in JSON parsing middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Cassie's Coffee Shop API",
        status: "Running",
    });
});

// Menu API routes
app.use("/api/items", itemRoutes);


// Handle unknown routes, 404
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

// Handle errors from JSON parsing, 400
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    err.message = "Malformed JSON request body";
  }

  next(err);
});

// Centralized error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Cassie's API running on ${PORT}`);
});