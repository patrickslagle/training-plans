const controller = require('./controllers');

function routes(app) {
  app.get('/workout/:subcategory', controller.findWorkouts);
}

module.exports = routes;
