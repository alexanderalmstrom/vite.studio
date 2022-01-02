import fs from 'fs';
import path from 'path';
import express from 'express';

export async function productionMiddleware(
  root: string,
  app: express.Application
) {
  app.use('*', async (req: any, res: any) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(root, 'dist/client/index.html'),
        'utf-8'
      );

      const { render } = await import(
        path.resolve(root, 'dist/server/server.js')
      );

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

  return app;
}
