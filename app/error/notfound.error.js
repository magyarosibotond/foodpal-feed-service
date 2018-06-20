import { HttpError } from ".";

export class NotFoundError extends HttpError {

  constructor(resource) {
    super(404, resource + " not found.");
  }
}
