import express from 'express';
import cors from 'cors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config = (): void => {
    this.app.use(express.json());
    this.app.use(cors());
  }

  public start = (PORT: number): void => {
    this.app.listen(PORT, () => `Servidor rodando na porta ${PORT}`)
  }
}

export { App }
