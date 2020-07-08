const express = require('express');
const routes = express.Router();
const barraqueirasController = require('./controllers/barraqueirasController')
const produtosController = require('./controllers/produtosController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/barraqueiras', barraqueirasController.create);
routes.get('/barraqueiras', barraqueirasController.index);

routes.post('/produto', produtosController.create);
routes.get('/produto', produtosController.index);
routes.delete('/produto/:id', produtosController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/session', SessionController.create);

module.exports = routes;