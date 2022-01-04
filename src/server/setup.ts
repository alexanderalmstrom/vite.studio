import express from 'express';
import { developmentMiddleware } from './middleware/development';
import { productionMiddleware } from './middleware/production';

export async function setup(
  application: express.Application,
  developmentMode?: boolean
) {
  developmentMode
    ? await developmentMiddleware(application)
    : await productionMiddleware(application);

  return application;
}
