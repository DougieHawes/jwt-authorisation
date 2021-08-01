exports.getUsers = (req, res) => {
  return res.json({ msg: "get users" });
};

exports.getUser = (req, res) => {
  return res.json({ msg: "get user" });
};

exports.adminRoute = (req, res) => {
  return res.json({ msg: "admin route" });
};
