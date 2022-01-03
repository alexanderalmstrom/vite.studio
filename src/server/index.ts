import express from 'express';
import { developmentMiddleware } from './middleware/development';
import { productionMiddleware } from './middleware/production';

const port = process.env.PORT || 3000;
const developmentMode = process.env.NODE_ENV === 'development';

async function server(
  root: string,
  application: express.Application,
  developmentMode: boolean
) {
  developmentMode
    ? await developmentMiddleware(root, application)
    : await productionMiddleware(root, application);

  return application;
}

server(process.cwd(), express(), developmentMode)
  .then((application: express.Application) => {
    application.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    throw new Error(error);
  });
