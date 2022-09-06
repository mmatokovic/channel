import { CreateUserInput } from "./user.schema";
import { hashPassword } from "../../lib/hash";
import { db } from "../../lib/db";

export async function createUser(input: CreateUserInput) {
  const { password, ...rest } = input;

  const { hash, salt } = hashPassword(password);

  const user = await db.user.create({
    data: { ...rest, salt, password: hash },
  });

  return user;
}

export async function findUserById(id: number) {
  return db.user.findUnique({
    where: {
      id,
    },
  });
}

export async function findUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findUsers() {
  return db.user.findMany({
    select: {
      email: true,
      name: true,
      id: true,
    },
  });
}