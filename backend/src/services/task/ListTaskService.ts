import prismaClient from '../../prisma/prismaClient';

class ListTaskService {
  async execute() {
    const tasks = await prismaClient.task.findMany({
      select: {
        id: true,
        name: true,
        status: true,
        created_at: true,
        updated_at: true,
      },
    });
    return tasks;
  }
}

export { ListTaskService };
