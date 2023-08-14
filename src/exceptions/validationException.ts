import { ZodError, ZodIssue } from "zod";

export class ValidationException extends Error {
  constructor(public errors: any) {
    super("Validation error");
    this.errors = this.formatZodError(errors);
    this.name = "ValidationException";
  }

  formatZodIssue(issue: ZodIssue): string {
    const { path, message } = issue;
    const pathString = path.join(".");
    return `${pathString}: ${message}`;
  }

  formatZodError(error: ZodError): string[] {
    const { issues } = error;
    const formattedErrors: string[] = [];

    for (const issue of issues) {
      formattedErrors.push(this.formatZodIssue(issue));
    }

    return formattedErrors;
  }
}
