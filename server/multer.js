const multer = require('multer');

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage/'); //specifies the target directory. null is for errors.
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); //our filename and the date
    }
});
const upload = multer({ storage: store });

module.exports = upload;