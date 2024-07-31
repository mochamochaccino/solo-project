const fs = require('fs');
const path = require('path');
const fileController = {};

fileController.uploadCheck = (req, res, next) => {
    //console.log(req.file);
    if(!req.file){
        const error = {
            log: 'fileController.uploadCheck upload error',
            status: 500,
            message: { err: 'An error has occured during the file upload' }
        };
        next(error);
    }
    next();
};

fileController.delete = (req, res, next) => {
    const source = res.locals.path.file_path;
    //console.log(path.resolve(source));
    try{
        fs.unlinkSync(path.resolve(source));
        next();
    }
    catch (err) {
        const error = {
            log: 'fileController.delete: deletion error',
            status: 500,
            message: { err: 'An error has occured ' + err }
        };
        next(error);
    }
};

module.exports = fileController;