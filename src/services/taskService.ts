import models from "../models";
import { TaskRepository } from "../repositories/taskRepository";
import { Task } from "../helpers/types/taskType";

const { Task } = models;
const taskRepository = new TaskRepository(Task);

class TaskService {
  /**
   * Creates a new task.
   *
   * @param {object} attributes - The attributes of the task.
   * @param {string} attributes.title - The title of the task.
   * @param {string} attributes.description - The description of the task.
   * @param {string} attributes.createdBy - The creator of the task.
   * @returns {Promise<Task>} A Promise that resolves with the created task.
   *
   * @throws {Error} Throws an error if the task creation fails.
   */
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
