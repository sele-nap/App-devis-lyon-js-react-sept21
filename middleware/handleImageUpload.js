import multer from "multer";
import path from "path";
import uniqid from "uniqid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname).toLowerCase();
    cb(null, `${uniqid()}${extname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /bmp|jpeg|jpg|png|txt|doc|docx|xls|xslx|odt|ods|pdf/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  const err = `Error: File upload only supports the following filetypes - ' + ${filetypes}`;
  console.error(err);
  return cb(err);
};

const fileSize = 5000000;
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize,
  },
});

module.exports = upload;
