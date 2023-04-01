import express from 'express';
import cors from 'cors';

import UsersRoutes from './Routes/Users';
import EmojisRoutes from './Routes/Emojis';
import UsersEmojisRoutes from './Routes/UsersEmojis';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    this.app.use('/users', UsersRoutes);
    this.app.use('/emojis', EmojisRoutes);
    this.app.use('/favorites', UsersEmojisRoutes);
  }

  private config = (): void => {
    this.app.use(express.json());
    this.app.use(cors());
  }

  public start = (PORT: number): void => {
    this.app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  }
}

export { App }
