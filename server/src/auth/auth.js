import { expressjwt } from "express-jwt";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../db/users.js";
import { StatusCodes } from "http-status-codes";

const secret = Buffer.from("Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt", "base64");

export const authMiddleware = expressjwt({
  algorithms: ["HS256"],
  credentialsRequired: false,
  secret,
});

export async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user || user.password !== password) {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  } else {
    const claims = { sub: user.id, email: user.email };
    const token = jwt.sign(claims, secret);
    res.json({ token });
  }
}
