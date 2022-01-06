import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer } from 'vite';
import { replaceHtml } from '../utils/replaceHtml';

export async function developmentMiddleware(application: express.Application) {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });

  application.use(vite.middlewares);

  application.use('*', async (req: express.Request, res: express.Response) => {
    const url = req.originalUrl;

    try {
      const template = await vite.transformIndexHtml(
        url,
        fs.readFileSync(
          path.resolve(__dirname, '..', '..', '..', 'index.html'),
          'utf-8'
        )
      );

      const { render } = await vite.ssrLoadModule('./src/app/render.tsx');

      const html = await replaceHtml({ url, template, render });

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch ({ message, ...error }) {
      if (error instanceof Error) {
        vite.ssrFixStacktrace(error);
        console.error(error);
      }

      res.status(500).end(message);
    }
  });

  return application;
}
