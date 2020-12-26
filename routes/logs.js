import LogsController from '../controllers/logs';

export default (app) => {
  const logsCtrl = new LogsController(app.datasource.models.Logs);

  app.route('/logs')
    .get((req, res) => logsCtrl.getAll(req, res))
    .post((req, res) => logsCtrl.create(req, res));
  app.route('/logs/:id')
    .get((req, res) => logsCtrl.getById(req, res))
    .put((req, res) => logsCtrl.update(req, res))
    .delete((req, res) => logsCtrl.delete(req, res));
};
