import { tokenRepository } from "../repository/token.repository"
import { AuthError } from "../error";

export function isAuthenticated(req, res, next) {
  var userId = tokenRepository.verify(req.headers.authorization)

  if (userId != null) {
    req.me = userId;
    return next();
  }

  next(new AuthError());
}
