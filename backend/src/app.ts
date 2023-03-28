import express from 'express';
import cors from 'cors';

import UsersRoutes from './Routes/Users';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    this.app.use('/users', UsersRoutes)
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
