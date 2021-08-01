const router = require("express").Router();

const { getUser, getUsers, adminRoute } = require("../controllers/user");
const { isAuth, isAdmin } = require("../middleware");

router.get("/getusers", isAuth, getUsers);
router.get("/getuser", isAuth, getUser);
router.get("/admin", isAdmin, adminRoute);

module.exports = router;
