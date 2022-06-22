import { TaskRequest } from '../../interfaces/TaskInterface';
import prismaClient from '../../prisma/prismaClient';

class CreateTaskService {
  async execute({ name }: TaskRequest) {
    if (!name) {
      throw new Error('Task name is required');
    }

    const task = await prismaClient.task.create({
      data: {
        name,
      },
    });

    return task;
  }
}

export { CreateTaskService };
