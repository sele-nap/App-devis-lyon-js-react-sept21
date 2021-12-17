const db = require("../db");
const Joi = require("joi");
// const { AiFillFilePdf } = require("react-icons/ai");

const estimate = (data, forUpdate = false) => {
  return Joi.object({
    additionnalInformation: Joi.string()
      .min(1)
      .presence(forUpdate ? "optional" : "required"),
    deadLIne: Joi.date().presence(forUpdate ? "optional" : "required"),
    attachedFiles: Joi.extend(AiFillFilePdf),
  }).validate(data, { abortEarly: false }).error;
};

const create = async ({ additionnalInformation, deadLIne, attachedFiles }) => {
  const estimate = await estimate(null);
  return db.estimate.create({
    data: {
      userId,
      deadLIne,
      additionnalInformation,
      attachedFiles,
    },
  });
};

export default { estimate, create };
