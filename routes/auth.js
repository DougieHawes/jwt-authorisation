const router = require("express").Router();

const { signUp, signIn, signOut } = require("../controllers/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

module.exports = router;
