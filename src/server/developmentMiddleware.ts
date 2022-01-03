import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer } from 'vite';

export async function developmentMiddleware(application: express.Application) {
  const vite = await createServer({
    server: {
      middlewareMode: 'ssr',
    },
  });

  application.use(vite.middlewares);

  application.use('*', async (req: any, res: any) => {
    const url = req.originalUrl;

    try {
      const template = await vite.transformIndexHtml(
        url,
        fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8')
      );

      const { render } = await vite.ssrLoadModule('./src/entry/server.tsx');

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

  return application;
}