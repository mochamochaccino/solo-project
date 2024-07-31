const db = require('../postgres');
const dbController = {};

dbController.write = (req, res, next) => {
    console.log(req.file);
    const { originalname, path } = req.file;
    const parameters = [originalname, path];
    const queryAdd = 'INSERT INTO public.files (file_name, file_path) VALUES ($1, $2)';
    db.query(queryAdd, parameters)
    .then(data => {
        //console.log(data);
        return data;
    })
    .catch(error => {
        const errorObj = {
            log: 'dbController.write insert error: ' + error,
            status: 500,
            message: { err: 'An error occurred' }
        };
        next(errorObj);
    });
    next();
};

module.exports = dbController;