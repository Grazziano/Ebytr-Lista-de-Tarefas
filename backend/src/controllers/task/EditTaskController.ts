import { Request, Response } from 'express';
import { EditTaskService } from '../../services/task/EditTaskService';

class EditTaskController {
  async handle(req: Request, res: Response) {
    const { task_id, name } = req.body;

    const editTask = new EditTaskService();

    const result = await editTask.execute({ task_id, name });

    return res.status(200).json(result);
  }
}

export { EditTaskController };
