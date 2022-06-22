import { Request, Response } from 'express';
import { CreateTaskService } from '../../services/task/CreateTaskService';

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createTask = new CreateTaskService();

    const result = await createTask.execute({ name });

    return res.status(200).json(result);
  }
}

export { CreateTaskController };
