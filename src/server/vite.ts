import express from 'express';
import { setup } from './setup';

const vite = express();

setup(vite);

export { vite };
