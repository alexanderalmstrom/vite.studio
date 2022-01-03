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

async function init() {
  try {
    const application = await server(process.cwd(), express(), developmentMode);

    application.listen(port, () =>
      console.log(`Listening on http://localhost:${port}`)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    } else {
      throw error;
    }
  }
}

init();
