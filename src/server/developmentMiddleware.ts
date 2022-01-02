import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer } from 'vite';

export async function developmentMiddleware(
  root: string,
  app: express.Application
) {
  app.use('*', async (req: any, res: any) => {
    const url = req.originalUrl;

    const vite = await createServer({
      server: { middlewareMode: 'ssr' },
    });

    app.use(vite.middlewares);

    try {
      let template = fs.readFileSync(path.resolve(root, 'index.html'), 'utf-8');

      const { render } = await vite.ssrLoadModule(
        path.resolve(root, 'src/entry/server.tsx')
      );

      const appHtml = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (error) {
      let message = error;

      if (error instanceof Error) {
        message = error.message;

        vite.ssrFixStacktrace(error);
      }

      console.error(error);

      res.status(500).end(message);
    }
  });

  return app;
}
