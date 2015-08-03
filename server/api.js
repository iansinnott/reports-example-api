/**
 * @module api
 *
 * API Controller. This is an example API to get you started. Below you will see
 * me using the new es7 functional bind syntax `::res.send`. If you're not
 * fammiliar with this, it is the equivalent of saying `res.send.bind(res)`. See
 * this article for more info: https://github.com/zenparsing/es-function-bind
 */
import { Router } from 'express';

export default function apiWrapper(app) {
  const api = Router();

  api.get('/', (req, res) => {
    res.send({ success: true, message: 'You made it!' });
  });

  /* ***************************************************************************
   * RESTful route example
   * **************************************************************************/

  api.get('/reports', (req, res, next) => {
    app.models.report.find()
      .then(data => res.send(data))
      .catch(next);
  });

  api.get('/reports/:id', (req, res, next) => {
    app.models.report.findOne({ id: req.params.id })
      .then(data => res.send(data))
      .catch(next);
  });

  api.post('/reports', (req, res, next) => {
    app.models.report.create(req.body)
      .then(data => res.send(data))
      .catch(next);
  });

  api.put('/reports/:id', (req, res, next) => {
    app.models.report.update({ id: req.params.id }, req.body)
      .then(data => res.send(data))
      .catch(next);
  });

  api.delete('/reports/:id', (req, res, next) => {
    app.models.report.destroy({ id: req.params.id })
      .then(data => res.send(data))
      .catch(next);
  });

  return api;
}
