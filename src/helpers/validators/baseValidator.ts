import { Next, Request, Response } from "restify";
import { z } from "zod";
import { ValidationException } from "../../exceptions/validationException";

export class BaseValidator {
  static async validate(
    schema: z.ZodObject<any>,
    req: Request,
    res: Response,
    next: Next
  ): Promise<boolean | undefined> {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return true;
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        next(new ValidationException(error));
      } else {
        throw error;
      }

      return false;
    }
  }
}
