import jwt from "jsonwebtoken";

export function signJwt(user, secret) {
  return jwt.sign(user, secret);
}

export function verifyJwt(accessToken, secret) {
  try {
    const decodedToken = jwt.verify(accessToken, secret);
    return decodedToken;
  } catch (error) {
    throw new Error(error.message);
  }
}

export function extractJwt(bearerToken) {
  if (bearerToken.startsWith("Bearer")) {
    return bearerToken.substring(7, bearerToken.length);
  }
}
