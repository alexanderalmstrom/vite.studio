import express from 'express';
import { setup } from './setup';

const port = process.env.PORT || 3000;

setup(express(), process.env.NODE_ENV === 'development')
  .then((application) => {
    application.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
