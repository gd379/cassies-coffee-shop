
const validateItem = (req, res, next) => {
  const { name, category, price, caffeineLevel, available } =
    req.body || {};

  const errors = [];

  // Validate item name
  if (typeof name !== "string" || name.trim() === "") {
    errors.push("Name must be a non-empty string");
  }

  // Validate category
  const validCategories = ["Coffee", "Tea", "Bakery"];

  if (!validCategories.includes(category)) {
    errors.push("Category must be Coffee, Tea, or Bakery");
  }

  // Validate price
  if (
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price <= 0
  ) {
    errors.push("Price must be a positive number");
  }

  // Validate caffeine level
  const validCaffeineLevels = ["None", "Low", "Medium", "High"];

  if (!validCaffeineLevels.includes(caffeineLevel)) {
    errors.push(
      "Caffeine level must be None, Low, Medium, or High"
    );
  }

  // Validate availability
  if (typeof available !== "boolean") {
    errors.push("Available must be true or false");
  }

  // Reject invalid requests
  if (errors.length > 0) {
    const error = new Error("Invalid menu item data");
    error.status = 400;
    error.details = errors;

    return next(error);
  }

  next();
};

module.exports = validateItem;
