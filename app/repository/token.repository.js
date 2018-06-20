import jwt from 'jsonwebtoken';

class TokenRepository {

  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  verify(token) {
    try {
      const decoded = jwt.verify(token, this.secret)
      return decoded.id
    } catch(err) {
      return null;
    }
  }
}

export const tokenRepository = new TokenRepository();
