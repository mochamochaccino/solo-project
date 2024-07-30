const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  //console.log(path.resolve('/index.html'));
  res.status(200).sendFile(path.resolve('index.html'));
});

//Catch all handler
app.use((req, res) => {
  res.status(404).send('Not Found');
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