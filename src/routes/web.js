/** @format */

const express = require("express")

const router = express.Router()

const userRouter = require('./users')

const authMiddleware = require('../middlewares/auth.middlewares')

const homeController = require("../controllers/home.controller")
const aboutController = require("../controllers/page.controller")
const authController = require("../controllers/auth.controller")
const pageController = require("../controllers/page.controller")
router.get("/", homeController.index)
router.get("/gioi-thieu", homeController.index)
router.get("/dang-nhap",authController.login)
router.use(authMiddleware)
router.get("/lien-he",pageController.contact)
router.get("/user",userRouter)
module.exports = router
