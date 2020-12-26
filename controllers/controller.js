import HttpStatus from 'http-status';
import { response, errorResponse } from './response';

export default class Controller {
  constructor(model) {
    if (new.target === Controller) {
      throw new TypeError('Cannot construct Controller instances directly');
    }

    this.model = model;
  }

  getAll(req, res) {
    return this.model.findAll({})
      .then((result) => response(result, res))
      .catch((error) => errorResponse(error.message, res));
  }

  create(req, res) {
    return this.model.create(req.body)
      .then((result) => response(result, res, HttpStatus.CREATED))
      .catch((error) => errorResponse(error.message, res));
  }

  getById(req, res) {
    return this.model.findOne({
      where: req.params,
    })
      .then((result) => response(result, res))
      .catch((error) => errorResponse(error.message, res));
  }

  update(req, res) {
    return this.model.update(req.body, {
      where: req.params,
    })
      .then((result) => response(result, res))
      .catch((error) => errorResponse(error.message, res));
  }

  delete(req, res) {
    return this.model.destroy({
      where: req.params,
    })
      .then((result) => response(result, res, HttpStatus.NO_CONTENT))
      .catch((error) => errorResponse(error.message, res));
  }
}
