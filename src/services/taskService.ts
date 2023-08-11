import models from "../models";
import { TaskRepository } from "../repositories/taskRepository";
import { Task } from "../helpers/types/taskType";

const { Task } = models;
const taskRepository = new TaskRepository(Task);

class TaskService {
  static async create(attributes: {
    title: string;
    description: string;
    createdBy: string;
  }): Promise<Task> {
    const { title, description, createdBy } = attributes;

    const taskData = {
      title: title.trim(),
      description: description ?? "",
      createdBy,
    };

    return await taskRepository.create(taskData);
  }
}

export default TaskService;
