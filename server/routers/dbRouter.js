const path = require('path');
const express = require('express');
const fileController = require('../controllers/fileController');
const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/get', dbController.getData, (req, res) => {
    return res.status(200).json(res.locals.getData.rows);
  });

router.delete('/delete', dbController.getPath, fileController.delete, dbController.deleteData, (req, res) => {
    return res.status(200).send('Deletion Complete');
})

router.get('/download', dbController.getPath, fileController.download, (req, res) => {
  return res.status(200);
});

module.exports = router;