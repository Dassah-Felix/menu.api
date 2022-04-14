const {Router} = require("express")
const { createFood, getMenu } = require("../controllers/foodControllers")


const router =Router()

router.route("/foods").post(createFood).get(getMenu)

module.exports=router