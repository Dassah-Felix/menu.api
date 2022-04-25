const {Router} = require("express")
const { createUser, loginUser} = require("../controllers/userController")


const router =Router()

router.route("/users/register").post(createUser)
router.route("/users/login").post( loginUser)

module.exports=router