import express from 'express';
import { developmentMiddleware } from './developmentMiddleware';
import { productionMiddleware } from './productionMiddleware';

export async function setup(
  root: string,
  app: express.Application,
  isProduction: boolean
) {
  isProduction
    ? await productionMiddleware(root, app)
    : await developmentMiddleware(root, app);

  return app;
}
