const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/user");

const auth = async (req, res, next) => {
  //   console.log("auth middleware");
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    //console.log(token);

    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
