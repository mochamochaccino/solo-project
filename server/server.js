const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');

const fileRouter = require('./routers/fileRouter');
const dbRouter = require('./routers/dbRouter');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve('index.html'));
});

app.use(favicon(path.join(__dirname, './', 'favicon.ico')));

app.use('/upload', fileRouter);
app.use(express.json());
app.use('/database', dbRouter);



//Catch all handler
app.use((req, res) => {
  return res.status(404).send('404 Not Found');
});

//Defaulterror handler
const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
};
  

app.use((err, req, res, next) => {
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});
  

  //Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
  
module.exports = app;