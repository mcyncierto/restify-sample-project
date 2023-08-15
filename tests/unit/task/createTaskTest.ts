import TaskService from "../../../src/services/taskService";
import model from "../../../src/models";

const { Task } = model;

jest.mock("../../../src/models", () => ({
  Task: {
    create: jest.fn(),
  },
}));

describe("TaskService", () => {
  describe("create", () => {
    it("should create a task", async () => {
      // Arrange
      const mockTask = {
        title: "Lorem Ipsum",
        description: "Lorem Ipsum Dolor",
        createdBy: "b7bded47-aa7f-47a4-9b12-4295685a5df1",
      };
      jest.spyOn(Task, "create").mockResolvedValue(mockTask);

      const mockAttributes = {
        title: "Lorem Ipsum",
        description: "Lorem Ipsum Dolor",
        createdBy: "b7bded47-aa7f-47a4-9b12-4295685a5df1",
      };
      const mockTransaction = {};

      // Act
      const result = await TaskService.create(mockAttributes);

      // Assert
      expect(result).toEqual(mockTask);
      expect(Task.create).toHaveBeenCalledWith(mockTask, mockTransaction);

      jest.spyOn(Task, "create").mockRestore();
    });
  });
});
