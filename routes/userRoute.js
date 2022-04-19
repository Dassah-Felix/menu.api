const {Router} = require("express")
const { createUser} = require("../controllers/userController")


const router =Router()

router.route("/users").post(createUser);

module.exports=router