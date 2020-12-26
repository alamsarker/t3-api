import SwaggerController from '../controllers/swagger';

export default (app) => {
  const swaggerCtrl = new SwaggerController();
  app.route('/swagger.json')
    .get((req, res) => swaggerCtrl.index(req, res));
};
