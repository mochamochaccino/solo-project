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
            log: 'fileController.delete deletion error: ' + err,
            status: 500,
            message: { err: 'An error has occured ' }
        };
        next(error);
    }
};

fileController.download = (req, res, next) => {
    const source = path.resolve(res.locals.path.file_path);
    console.log('download start');
    res.download(source, (err) => {
        if(err){
            const error = {
                log: 'fileController.download download error: ' + err,
                status: 500,
                message: { err: 'An error has occured ' }
            }
            next(err);
        }
        else{
            next();
        }
    });
}

module.exports = fileController;