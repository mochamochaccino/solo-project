const path = require('path');
const express = require('express');
const fileController = require('../controllers/fileController');
const dbController = require('../controllers/dbController');
const multerUpload = require('../multer');

const router = express.Router();

router.post('/file', multerUpload.single('file'), fileController.uploadCheck, dbController.write, (req, res) => {
    return res.status(200).send('File Sucessfully Uploaded');
  });

module.exports = router;