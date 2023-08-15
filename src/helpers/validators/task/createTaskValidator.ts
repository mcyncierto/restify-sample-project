import { Request, Response, Next } from "restify";
import { z } from "zod";
import { BaseValidator } from "../baseValidator";

export class CreateTaskValidator {
  static async validate(
    req: Request,
    res: Response,
    next: Next
  ): Promise<boolean | undefined> {
    const schema = z.object({
      body: z.object({
        title: z.string().trim().nonempty({
          message: "Title is required",
        }),
        description: z
          .string()
          .trim()
          .nonempty({ message: "Description is required" }),
      }),
    });

    return await BaseValidator.validate(schema, req, res, next);
  }
}
