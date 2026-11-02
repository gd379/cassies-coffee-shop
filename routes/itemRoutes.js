const express = require("express");
const router = express.Router();
const menuItems = require("../data/menuItems");
const validateItem = require("../middleware/validateItem");

// GET
// Retrieve all menu items
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: menuItems.length,
        data: menuItems,
    });
});

// Retrieve a single menu item by ID
router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const item = menuItems.find((item) => item.id === id);

    if (!item) {
    const error = new Error("Menu item not found");
    error.status = 404;
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: item,
  });
});

// POST - Create a new menu item
router.post("/", validateItem, (req, res) => {
  const { name, category, price, caffeineLevel, available } =
    req.body;

  const newItem = {
    id: menuItems.length > 0
      ? Math.max(...menuItems.map((item) => item.id)) + 1
      : 1,
    name,
    category,
    price,
    caffeineLevel,
    available,
  };

  menuItems.push(newItem);

  res.status(201).json({
    success: true,
    message: "Menu item added successfully",
    data: newItem,
  });
});

// DELETE - Remove a menu item by ID
router.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const index = menuItems.findIndex((item) => item.id === id);

  if (index === -1) {
    const error = new Error("Menu item not found");
    error.status = 404;
    return next(error);
  }

  const deletedItem = menuItems.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Menu item deleted successfully",
    data: deletedItem[0],
  });
});

module.exports = router;