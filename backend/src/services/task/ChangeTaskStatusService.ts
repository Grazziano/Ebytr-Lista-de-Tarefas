import prismaClient from '../../prisma/prismaClient';

interface TaskRequest {
  task_id: string;
  status: string;
}

class ChangeTaskStatusService {
  async execute({ task_id, status }: TaskRequest) {
    const statusTask = ['pendente', 'em andamento', 'pronto'];

    if (!statusTask.includes(status)) {
      throw new Error('status invalid');
    }

    const task = await prismaClient.task.update({
      where: { id: task_id },
      data: { status },
    });

    return task;
  }
}

export { ChangeTaskStatusService };
