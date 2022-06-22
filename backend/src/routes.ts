import { Router } from 'express';
import { CreateTaskController } from './controllers/task/CreateTaskController';
import { ListTaskController } from './controllers/task/ListTaskController';
import { RemoveTaskController } from './controllers/task/RemoveTaskController';

const router = Router();

router.post('/task', new CreateTaskController().handle);
router.get('/task', new ListTaskController().handle);
router.delete('/task/remove', new RemoveTaskController().handle);

export { router };
