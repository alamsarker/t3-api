describe('Route Logs', () => {
  const { Logs } = app.datasource.models;
  const defLog = {
    id: 1,
    name: 'X',
    stepNumber: 1,
    boxNumber: 0,
    gameNumber: 1,
  };
  beforeEach((done) => {
    Logs.destroy({ where: {} })
      .then(() => Logs.create(defLog))
      .then(() => {
        done();
      });
  });

  describe('Route GET /logs', () => {
    it('Should return log list', (done) => {
      request
        .get('/logs')
        .end((err, res) => {
          expect(res.body[0].name).to.be.eql(defLog.name);
          expect(res.body[0].id).to.be.eql(defLog.id);
          done(err);
        });
    });
  });

  describe('Route GET /logs/{id}', () => {
    it('Should return a book', (done) => {
      request
        .get('/logs/1')
        .end((err, res) => {
          expect(res.body.name).to.be.eql(defLog.name);
          expect(res.body.id).to.be.eql(defLog.id);
          done(err);
        });
    });
  });

  describe('Route POST /logs', () => {
    it('Should create a log', (done) => {
      const newLog = {
        id: 2,
        name: 'X',
        stepNumber: 2,
        boxNumber: 3,
        gameNumber: 1,
      };

      request
        .post('/logs')
        .send(newLog)
        .end((err, res) => {
          expect(res.body.name).to.be.eql(newLog.name);
          expect(res.body.id).to.be.eql(newLog.id);
          done(err);
        });
    });
  });

  describe('Route PUT /logs/{id}', () => {
    it('Should update a log', (done) => {
      const updateLog = {
        id: 1,
        name: 'O',
        stepNumber: 1,
        boxNumber: 8,

      };

      request
        .put('/logs/1')
        .send(updateLog)
        .end((err, res) => {
          // console.log(res.body);
          expect(res.body).to.be.eql([1]);
          done(err);
        });
    });
  });

  describe('Route PUT /logs/{id}', () => {
    it('Should delete a log', (done) => {
      request
        .delete('/logs/1')
        .end((err, res) => {
          // console.log(res);
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
