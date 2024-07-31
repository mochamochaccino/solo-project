const db = require('../postgres');
const dbController = {};

dbController.write = (req, res, next) => {
    const queryString = 'select * from public.files';
    db.query(queryString)
    .then(data => {
        console.log(data);
    });
};

module.exports = dbController;