import Express from "express";
import * as photoController from "../controllers/photoController.js";

const router = Express.Router();

router.route("/").post(photoController.createPhoto).get(photoController.getAllPhotos)
router.route("/:id").get(photoController.getAPhoto)

export default router;
