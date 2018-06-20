import { HttpError } from ".";

export class AuthError extends HttpError {
  
  constructor() {
    super(401, 'Unauthorized');
  }
}
