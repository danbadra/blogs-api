const express = require('express');

// ...

const app = express();

// ! <-------------- NÃO MEXER -------------->
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
// ! <-------------- NÃO MEXER -------------->

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
