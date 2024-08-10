const createError = require("http-errors");
const multer = require("multer");
const path = require("path");

const uploader = ( allowed_file_types, max_file_size, error_mgg) => {
  const UPLOAD_FOLDER = `${appRoote}/public/uploads/`;
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_FOLDER),
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now() +
        fileExt;
      cb(null, fileName);
    },
  });

  const upload = multer({
    storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_mgg));
      }
    },
  });

  return upload;
};
module.exports = uploader;
