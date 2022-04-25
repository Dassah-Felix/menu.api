const {Router} = require("express")
const { createFood, getMenu } = require("../controllers/foodControllers")
const { protect}=require("../middlewares/authMiddleware")

const router =Router()

router.route("/foods").post(protect, createFood).get(protect, getMenu)

module.exports=router