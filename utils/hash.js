import { hash } from "bcryptjs";

export default async function hashedPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
