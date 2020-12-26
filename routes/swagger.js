import SwaggerController from '../controllers/swagger';

export default (app) => {
  app.route('/swagger.json')
    .get((req, res) => SwaggerController.index(req, res));
};
