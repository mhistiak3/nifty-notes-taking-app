const uploader = require("../utilities/singleUploader");


function avatarUpload(req, res, next) {
  const upload = uploader(
    ["image/jpg", "image/png", "image/jpeg"],
    1000000,
    "Only allowed .jpg, .png, .jpeg"
  );
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          message: err.message,
        },
      });
    } else {
      next();
    }
  });
}
module.exports = avatarUpload;
