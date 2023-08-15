import { Request, Response, Next } from "restify";
import { CreateTaskValidator } from "../../../../src/helpers/validators/task/createTaskValidator";

describe("Validators", () => {
  describe("create task validator", () => {
    it("should pass if all fields are valid", async () => {
      // Arrange
      const req: Partial<Request> = {
        body: {
          title: "Valid Title",
          description: "Valid Description",
        },
      };
      const res: Partial<Response> = {};
      const next: Next = jest.fn();

      // Act
      const result = await CreateTaskValidator.validate(
        req as Request,
        res as Response,
        next
      );

      // Assert
      expect(result).toEqual(true);
    });

    it("should return errors if required fields are empty or invalid", async () => {
      // Arrange
      const req: Partial<Request> = {
        body: {
          title: "",
          description: "  ",
        },
      };
      const res: Partial<Response> = {};
      const next: Next = jest.fn();

      // Act
      let result;
      let errors;
      try {
        result = await CreateTaskValidator.validate(
          req as Request,
          res as Response,
          next
        );
      } catch (error: any) {
        errors = error;
      }

      // Assert
      const expectedErrors = [
        "body.title: Title is required",
        "body.description: Description is required",
      ];

      expect(errors.name).toBe("ValidationException");
      expect(errors.message).toBe("Validation error");
      expect(errors.errors).toHaveLength(2);
      expect(new Set(expectedErrors)).toEqual(new Set(errors.errors));
    });
  });
});
