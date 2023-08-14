import { Request, Response, Next } from "restify";
import { z } from "zod";
import { BaseValidator } from "../baseValidator";

export class CreateTaskValidator {
  static async validate(
    req: Request,
    res: Response,
    next: Next
  ): Promise<void> {
    const schema = z.object({
      body: z.object({
        title: z
          .string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
          })
          .nonempty({
            message: "Title is required",
          })
          .trim(),
        description: z
          .string()
          .trim()
          .nonempty({ message: "Description is required" }),
      }),
    });

    return await BaseValidator.validate(schema, req, res, next);
  }
}
