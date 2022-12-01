import  Express from "express";
import * as pageController from "../controllers/pageController.js"

const router = Express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)

export default router