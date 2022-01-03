import express from 'express';
import { setup } from './setup';

const vite = express();

setup(process.cwd(), vite, false);

export { vite };
