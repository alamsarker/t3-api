import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/config';
import datasource from './config/datasource';
import LogsRouter from './routes/logs';
import SwaggerRouter from './routes/swagger';

const app = express();
dotenv.config();
app.config = config;
app.datasource = datasource(app);
app.set('port', process.env.API_PORT);

app.use(cors());
app.use(bodyParser.json());

/* eslint no-underscore-dangle: 0 */
app.use('/api/v1', app._router);

SwaggerRouter(app);
LogsRouter(app);

export default app;
