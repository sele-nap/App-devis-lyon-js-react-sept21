const db = require("../db");
const argon2 = require("argon2");
const Joi = require("joi");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

const emailAlreadyExists = async (email) => {
  return !!(await db.users.findFirst({ where: { email } }));
};

const validateUser = (data, forUpdate = false) => {
  Joi.object({
    email: Joi.string()
      .email()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    password: Joi.string()
      .min(8)
      .max(100)
      .presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const create = async ({ email, password }) => {
  const hashedPassword = await hashPassword(password);
  return db.users.create({
    data: { email, hashedPassword },
  });
};

module.exports = {
  hashPassword,
  verifyPassword,
  emailAlreadyExists,
  validateUser,
  create,
};
