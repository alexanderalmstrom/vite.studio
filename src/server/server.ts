import express from 'express';
import { setup } from './setup';

const port = process.env.PORT || 3000;
const developmentMode = process.env.NODE_ENV === 'development';

async function server() {
  try {
    const application = await setup(express(), developmentMode);

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

server();
