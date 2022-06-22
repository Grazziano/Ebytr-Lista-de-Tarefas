import { TaskIdRequest } from '../../interfaces/TaskInterface';
import prismaClient from '../../prisma/prismaClient';

class RemoveTaskService {
  async execute({ task_id }: TaskIdRequest) {
    const task = await prismaClient.task.delete({
      where: {
        id: task_id,
      },
    });

    return task;
  }
}

export { RemoveTaskService };
