import express from 'express';
import { developmentMiddleware } from './developmentMiddleware';
import { productionMiddleware } from './productionMiddleware';

export async function setup(
  application: express.Application,
  developmentMode: boolean
) {
  developmentMode
    ? await developmentMiddleware(application)
    : await productionMiddleware(application);

  return application;
}
