
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

module.exports = fileController;