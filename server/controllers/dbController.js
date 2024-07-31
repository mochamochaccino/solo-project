const db = require('../postgres');
const dbController = {};

dbController.write = (req, res, next) => {
    //console.log(req.file);
    const { originalname, path , mimetype } = req.file;
    const trimmed = mimetype.split('/')
    const parameters = [originalname, path, trimmed[1]];
    const queryAdd = 'INSERT INTO public.files (file_name, file_path, file_type) VALUES ($1, $2, $3)';
    db.query(queryAdd, parameters)
    .then(data => {
        //console.log(data);
        return next();
        //return data;
    })
    .catch(error => {
        const errorObj = {
            log: 'dbController.write insert error: ' + error,
            status: 500,
            message: { err: 'An error occurred' }
        };
        return next(errorObj);
    });
};

dbController.getData = (req, res, next) => {
    const queryGet = 'SELECT file_name, upload_time, file_type FROM public.files';
    db.query(queryGet)
    .then(data => {
        res.locals.getData = data;
        //console.log(data);
        return next();
    })
    .catch(error => {
        const errorObj = {
            log: 'dbController.getData get error: ' + error,
            status: 500,
            message: { err: 'An error occurred' }
        };
        return next(errorObj);
    });
};
module.exports = dbController;