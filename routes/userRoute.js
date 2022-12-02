import Express from "express";
import * as userController from "../controllers/userController.js";

const router = Express.Router();

router.route("/register").post(userController.createUser)
router.route("/login").post(userController.loginUser)

export default router;
