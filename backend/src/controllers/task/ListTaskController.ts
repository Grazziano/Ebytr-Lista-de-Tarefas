import { Request, Response } from 'express';
import { ListTaskService } from '../../services/task/ListTaskService';

class ListTaskController {
  async handle(req: Request, res: Response) {
    const listTask = new ListTaskService();

    const tasks = await listTask.execute();

    return res.status(200).json(tasks);
  }
}

export { ListTaskController };
