import fs from 'fs';
import path from 'path';
import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';

export async function productionMiddleware(application: express.Application) {
  application.use(compression());

  application.use(
    serveStatic(path.resolve(__dirname, '..', 'entry', 'client'), {
      index: false,
    })
  );

  application.use('*', async (req: any, res: any) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, '..', 'entry', 'client', 'index.html'),
        'utf-8'
      );

      const { render } = require(path.resolve(
        __dirname,
        '..',
        'entry',
        'server',
        'server.js'
      ));

      const appHtml = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      let message = error;

      if (error instanceof Error) {
        message = error.message;
      }

      console.error(error);

      res.status(500).end(message);
    }
  });

  return application;
}
