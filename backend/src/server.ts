import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

const server = express();

const port = 3001;

server.use(express.json());
server.use(cors());

server.use(router);

server.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
  next();
});

server.listen(port, () => console.log(`Server listening on port ${port}! 🚀`));

export default server;
