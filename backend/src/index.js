const express = require('express');
const routes = require('./routes');
const cors = require('cors');


/**Metoos HTTP
 * Get
 * Post
 * delete
 * put
 */

 /**
  * Tipos de parametros
  * 
  * Query: parametros nomeados enviados na rota após '?'
  * Route params: parametros utilizados para identificar recursos
  * Request Body:
  */

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);