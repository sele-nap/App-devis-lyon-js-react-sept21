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
  return !!(await db.user.findFirst({ where: { email } }));
};

const validateUser = (data, forUpdate = false) => {
  return Joi.object({
    email: Joi.string()
      .email()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    lastname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    firstname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    managerName: Joi.string().max(255),
    organizationType: Joi.string().max(255),
    organizationName: Joi.string().max(255),
    managerName: Joi.string().max(255),
    phone: Joi.string().max(255),
    siretNumber: Joi.string().max(255),
    address1: Joi.string().max(255),
    address2: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    zipCode: Joi.string().max(255),
    city: Joi.string().max(255),
    password: Joi.string()
      .min(8)
      .max(100)
      .presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const create = async ({
  lastname,
  firstname,
  email,
  password,
  managerName,
  organizationType,
  organizationName,
  phone,
  siretNumber,
  address1,
  address2,
  zipCode,
  city,
}) => {
  const hashedPassword = await hashPassword(password);
  return db.user.create({
    data: {
      lastname,
      firstname,
      email,
      hashedPassword,
      managerName,
      organizationType,
      organizationName,
      phone,
      siretNumber,
      address1,
      address2,
      zipCode,
      city,
    },
  });
};

const findByEmail = async (email = "") => {
  return await db.user.findUnique({ where: { email } });
};

module.exports = {
  hashPassword,
  verifyPassword,
  emailAlreadyExists,
  validateUser,
  create,
  findByEmail,
};
