import express from 'express';
import { setup } from './setup';

const vite = async () => {
  const application = express();

  await setup(process.cwd(), application, false);
};

export { vite };
