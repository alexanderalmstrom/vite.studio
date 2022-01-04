import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import serveStatic from 'serve-static';
import { replaceHtml } from '../utils/replaceHtml';

export async function productionMiddleware(application: express.Application) {
  application.use(
    cors({
      origin: true,
    })
  );

  application.use(compression());

  application.use(
    serveStatic(path.resolve(__dirname, '..', '..', 'entry', 'client'), {
      index: false,
    })
  );

  application.use('*', async (req: express.Request, res: express.Response) => {
    const url = req.originalUrl;

    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, '..', '..', 'entry', 'client', 'index.html'),
        'utf-8'
      );

      const { render } = require(path.resolve(
        __dirname,
        '..',
        '..',
        'entry',
        'server',
        'server.js'
      ));

      const html = await replaceHtml({ url, template, render });

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch ({ message, ...error }) {
      if (error instanceof Error) {
        console.error(error);
      }

      res.status(500).end(message);
    }
  });

  return application;
}
