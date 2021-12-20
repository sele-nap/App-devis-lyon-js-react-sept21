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

const validateUser = (data, forUpdate = true) => {
  console.log(data);
  return Joi.object({
    // CHAMPS REQUIRED
    email: Joi.string().email().max(255).required(),
    lastname: Joi.string().max(255).required(),
    firstname: Joi.string().max(255).required(),
    organizationType: Joi.string().max(255).required(),

    // CHAMPS SPE CATEGORIE
    managerName: Joi.string()
      .max(255)
      .presence(
        data.organizationType === "INDIVIDUAL" ? "optional" : "required"
      ),
    organizationName: Joi.string()
      .max(255)
      .presence(
        data.organizationType === "INDIVIDUAL" ? "optional" : "required"
      ),
    siretNumber: Joi.string()
      .max(255)

      .presence(
        data.organizationType === "INDIVIDUAL" ? "optional" : "required"
      ),

    // CHAMPS COORDDONNEES
    phone: Joi.string().max(255).required(),
    address1: Joi.string().max(255).required(),
    address2: Joi.string().max(255).optional(),
    zipCode: Joi.string().max(255).required(),
    city: Joi.string().max(255).required(),
    password: Joi.string().min(8).max(100).required(),
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
