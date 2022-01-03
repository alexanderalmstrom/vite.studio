import express from 'express';
import { developmentMiddleware } from './developmentMiddleware';
import { productionMiddleware } from './productionMiddleware';

export async function setup(
  root: string,
  application: express.Application,
  developmentMode: boolean
) {
  developmentMode
    ? await developmentMiddleware(root, application)
    : await productionMiddleware(root, application);

  return application;
}
