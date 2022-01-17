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
  const isIndividual = data.organizationType === "INDIVIDUAL";

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
      )
      .allow(...(isIndividual ? ["", null] : [])),
    organizationName: Joi.string()
      .max(255)
      .presence(
        data.organizationType === "INDIVIDUAL" ? "optional" : "required"
      )
      .allow(...(isIndividual ? ["", null] : [])),

    siretNumber: Joi.string()
      .max(255)

      .presence(
        data.organizationType === "INDIVIDUAL" ? "optional" : "required"
      )
      .allow(...(isIndividual ? ["", null] : [])),

    // CHAMPS COORDDONNEES
    phone: Joi.string().max(255).required(),
    address1: Joi.string().max(255).required(),
    address2: Joi.string()
      .max(255)
      .optional()
      .allow(...(data.organizationType ? ["", null] : [])),
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
  emailVerificationCode,
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
      emailVerificationCode,
      inscriptionDate: new Date(Date.now()),
    },
  });
};

const confirmEmail = async (emailVerificationCode) => {
  try {
    if (await db.user.findUnique({ where: { emailVerificationCode } })) {
      await db.user.update({
        where: { emailVerificationCode },
        data: { emailVerificationCode: null },
      });
      return true;
    }
  } catch (err) {
    console.error(err);
  }
  return false;
};

const findByEmail = async (email = "") => {
  return await db.user.findUnique({ where: { email } });
};

const userToShow = {
  id: true,
  email: true,
  address1: true,
  address2: true,
  firstname: true,
  lastname: true,
  managerName: true,
  organizationName: true,
  organizationType: true,
  phone: true,
  zipCode: true,
  city: true,
  siretNumber: true,
};
const getUsers = async () => {
  return db.user.findMany({
    select: userToShow,
  });
};
const getOneUser = (id) => {
  return db.user.findUnique({
    where: { id: parseInt(id, 10) },
    select: userToShow,
  });
};

const deleteOneUser = (id) => {
  return db.user
    .delete({ where: { id: parseInt(id, 10) } })
    .catch((_) => false);
};

// const createProject = ({ title, description, mainPictureUrl }) => {
//   return db.project.create({ data: { title, description, mainPictureUrl } });
// };

const updateOneUser = (id, data) => {
  return db.user
    .update({ where: { id: parseInt(id, 10) }, data })
    .catch((_) => false);
};

const getSafeAttributes = (user) => ({
  ...user,
  hashPassword: undefined,
});

module.exports = {
  hashPassword,
  verifyPassword,
  emailAlreadyExists,
  validateUser,
  create,
  findByEmail,
  confirmEmail,
  getUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  getSafeAttributes,
};
