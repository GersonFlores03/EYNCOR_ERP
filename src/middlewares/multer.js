const multer = require("multer")
//const path = require('path');




const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/image",

    filename: (req, file, cb) => {
      const date = Date.now();
      cb(null, `${date}-${file.originalname}`);
    },
  }),
});


module.exports = upload