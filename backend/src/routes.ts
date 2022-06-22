import { Router } from 'express';
import { CreateTaskController } from './controllers/task/CreateTaskController';

const router = Router();

router.post('/task', new CreateTaskController().handle);

export { router };
