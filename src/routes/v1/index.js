// ----------------------------------------
// Version 1 router
// ----------------------------------------

const express = require("express");
const router = express.Router();

const { UsersController, UserInfoController } = require("../../controllers");

// ------------------------------------------
// route for User_Info Table
// ------------------------------------------

router.post("/user_info", UserInfoController.create);
router.get("/user_info/:id", UserInfoController.get);
router.delete("/user_info/:id", UserInfoController.destroy);
router.patch("/user_info/:id", UserInfoController.update);

// ------------------------------------------
// route for Users Table
// ------------------------------------------

// router.post("/user", UsersController.create);
router.post("/user", UsersController.create);
router.get("/user/:id", UsersController.get);
router.delete("/user/:id", UsersController.destroy);
router.patch("/user/:id", UsersController.update);

module.exports = router;
