const express = require('express');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const postRouter = require('./routes/postRouter');

// ...

const app = express();

// ! <-------------- NÃO MEXER -------------->
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
// ! <-------------- NÃO MEXER -------------->

// * <---------------------- MEU CÓDIGO ----------------------> 

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

module.exports = app;
