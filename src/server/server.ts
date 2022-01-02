import express from 'express';
import { setup } from './setup';

setup(process.cwd(), express(), process.env.NODE_ENV === 'production')
  .then((app) => {
    app.listen(3000, () => {
      console.log('Listening on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error(error);
  });
