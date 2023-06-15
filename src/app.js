const express = require('express');
const loginRouter = require('./routes/loginRouter');

// ...

const app = express();

// ! <-------------- NÃO MEXER -------------->
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
// ! <-------------- NÃO MEXER -------------->

// * <---------------------- MEU CÓDIGO ----------------------> 

app.use('/', loginRouter);

module.exports = app;
