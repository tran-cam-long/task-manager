const multer = require("multer");

const upload = multer({
  dest: "users-data/images",
});

module.exports = upload;
