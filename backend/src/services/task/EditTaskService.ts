import prismaClient from '../../prisma/prismaClient';

interface TaskRequest {
  task_id: string;
  name: string;
}

class EditTaskService {
  async execute({ task_id, name }: TaskRequest) {
    const task = await prismaClient.task.update({
      where: { id: task_id },
      data: { name: name },
    });

    return task;
  }
}

export { EditTaskService };
