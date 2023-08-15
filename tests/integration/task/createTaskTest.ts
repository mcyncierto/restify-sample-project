import request from "supertest";
import { ApiServer } from "../../../src/server/index";
import model from "../../../src/models";
import { TaskRepository } from "../../../src/repositories/taskRepository";

const apiServer = new ApiServer();
const app = apiServer.createServer();
const { Task } = model;
const taskRepository = new TaskRepository(Task);

describe("POST /tasks", () => {
  it("should create a task", async () => {
    // Arrange
    const requestBody = {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Dolor",
      createdBy: "b7bded47-aa7f-47a4-9b12-4295685a5df1",
    };

    // Act
    const response = await request(app).post("/tasks").send(requestBody);

    // Assert
    const createdTask = await taskRepository.findById(response.body.data.id);
    expect(response.status).toBe(201);
    expect(createdTask.id).toBe(response.body.data.id);
    expect(createdTask.title).toBe(requestBody.title);
    expect(createdTask.description).toBe(requestBody.description);
    expect(createdTask.createdBy).toBe(requestBody.createdBy);
  });

  it("should return errors if required fields are empty or invalid", async () => {
    // Arrange
    const requestBody = {
      title: "  ",
      description: "",
      createdBy: "b7bded47-aa7f-47a4-9b12-4295685a5df1",
    };

    // Act
    const response = await request(app).post("/tasks").send(requestBody);

    // Assert
    const expectedErrors = [
      "body.title: Title is required",
      "body.description: Description is required",
    ];

    expect(response.status).toBe(400);
    expect(new Set(expectedErrors)).toEqual(new Set(response.body.errors));
    expect(response.body.name).toEqual("ValidationException");
  });
});
