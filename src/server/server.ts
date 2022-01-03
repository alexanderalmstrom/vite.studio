import express from 'express';
import { setup } from './setup';

const port = process.env.PORT || 3000;
const developmentMode = process.env.NODE_ENV === 'development';

setup(process.cwd(), express(), developmentMode)
  .then((application: express.Application) => {
    application.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    throw new Error(error);
  });
