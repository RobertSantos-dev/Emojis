import 'dotenv/config';
import { App } from './app';

const PORT: number = Number(process.env.API_PORT) || 3005;

new App().start(PORT);
