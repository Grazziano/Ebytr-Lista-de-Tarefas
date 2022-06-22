import { Router } from 'express';
import { CreateTaskController } from './controllers/task/CreateTaskController';
import { ListTaskController } from './controllers/task/ListTaskController';

const router = Router();

router.post('/task', new CreateTaskController().handle);
router.get('/task', new ListTaskController().handle);

export { router };
