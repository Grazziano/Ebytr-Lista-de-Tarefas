import { Request, Response } from 'express';
import { RemoveTaskService } from '../../services/task/RemoveTaskService';

class RemoveTaskController {
  async handle(req: Request, res: Response) {
    const task_id = req.query.task_id as string;

    const removeTask = new RemoveTaskService();

    await removeTask.execute({ task_id });

    return res.status(200).end();
  }
}

export { RemoveTaskController };
