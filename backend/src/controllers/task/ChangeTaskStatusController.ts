import { Request, Response } from 'express';
import { ChangeTaskStatusService } from '../../services/task/ChangeTaskStatusService';

class ChangeTaskStatusController {
  async handle(req: Request, res: Response) {
    const { task_id, status } = req.body;

    const changeTaskStatus = new ChangeTaskStatusService();

    const result = await changeTaskStatus.execute({ task_id, status });

    return res.status(200).json(result);
  }
}

export { ChangeTaskStatusController };
