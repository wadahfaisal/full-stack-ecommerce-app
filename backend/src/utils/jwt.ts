import { Response } from "express-serve-static-core";
import jwt, { SignOptions } from "jsonwebtoken";
import { TokenUser } from "../types/types";

export const createJWT = ({ payload }: { payload: TokenUser }) => {
  const JWT_SECRET = process.env.JWT_SECRET as string;
  const JWT_LIFETIME = process.env.JWT_LIFETIME as string;

  if (!JWT_SECRET) throw new Error("No jwt secret found");

  const options: SignOptions = {
    expiresIn: JWT_LIFETIME as unknown as number,
  };

  const token = jwt.sign(payload, JWT_SECRET, options);

  return token;
};

export const isTokenValid = ({ token }: { token: string }) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error("No jwt secret found");
  return jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
};

export const attachCookiesToResponse = ({
  res,
  user,
}: {
  res: Response;
  user: TokenUser;
}) => {
  const token = createJWT({ payload: user });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};
