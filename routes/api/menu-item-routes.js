const router = require("express").Router();

const {
  getAllMenu,
  getMenuById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../../controllers/menu-item-controller");

// get menu items and create menu item routes
router.route("/").get(getAllMenu).post(createMenuItem);

// get menu item by id and update and delete menu item by id routes
router
  .route("/:id")
  .get(getMenuById)
  .put(updateMenuItem)
  .delete(deleteMenuItem);

// export this route to index
module.exports = router;
