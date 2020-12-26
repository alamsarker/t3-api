import yaml from 'js-yaml';
import fs from 'fs';
import { response } from './response';

export default class SwaggerController {
  static index(req, res) {
    const swagger = yaml.safeLoad(fs.readFileSync('swagger.yml', 'utf-8'));
    swagger.host = `${process.env.API_HOST}:${process.env.API_PORT}`;

    return new Promise((resolve) => resolve(response(swagger, res)));
  }
}
