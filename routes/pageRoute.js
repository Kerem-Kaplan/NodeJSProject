import express from "express";
import * as pageController from "../controllers/pageController.js";
import * as photoController from "../controllers/photoController.js";

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/logout").get(pageController.getLogout);
router.route("/users/dashboard/modal").get(pageController.getModalPage)
router.route("/photos/:id/modalForUpdate").get(pageController.getModalPageForUpdate)

export default router;
