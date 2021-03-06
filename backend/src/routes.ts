import { Router } from 'express';
import { ChangeTaskStatusController } from './controllers/task/ChangeTaskStatusController';
import { CreateTaskController } from './controllers/task/CreateTaskController';
import { EditTaskController } from './controllers/task/EditTaskController';
import { ListTaskController } from './controllers/task/ListTaskController';
import { RemoveTaskController } from './controllers/task/RemoveTaskController';

const router = Router();

router.post('/task', new CreateTaskController().handle);
router.get('/task', new ListTaskController().handle);
router.delete('/task/remove', new RemoveTaskController().handle);
router.put('/task/update', new EditTaskController().handle);
router.put('/task/status', new ChangeTaskStatusController().handle);

export { router };
