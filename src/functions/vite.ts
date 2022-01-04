import express from 'express';
import { setup } from '../server/setup';

const vite = express();

setup(vite);

export { vite };
