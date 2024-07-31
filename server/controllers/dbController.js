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
    const queryGet = 'SELECT file_id, file_name, upload_time, file_type FROM public.files';
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

dbController.getPath = (req, res, next) => {
    const queryGet = 'SELECT file_path FROM public.files WHERE file_id = $1';
    const parameters = [req.query.file_id];
    db.query(queryGet, parameters)
    .then(data => {
        res.locals.path = data.rows[0];
        //console.log(data);
        return next();
    })
    .catch(error => {
        const errorObj = {
            log: 'dbController.getPath get error: ' + error,
            status: 500,
            message: { err: 'An error occurred' }
        };
        return next(errorObj);
    });
};

dbController.deleteData = (req, res, next) => {
    const parameters = [req.query.file_id];
    const queryDelete = 'DELETE FROM public.files WHERE file_id = $1';
    db.query(queryDelete, parameters)
    .then(data => {
        console.log(data);
        return next();
    })
    .catch(error => {
        const errorObj = {
            log: 'dbController.deleteData delete error: ' + error,
            status: 500,
            message: { err: 'An error occurred' }
        };
        return next(errorObj);
    });
};

module.exports = dbController;