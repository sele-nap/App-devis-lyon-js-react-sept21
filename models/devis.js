const db = require("../db");
const Joi = require("joi");
// const { AiFillFilePdf } = require("react-icons/ai");

const ValidateEstimate = (data, forUpdate = false) => {
  return Joi.object({
    additionalInformation: Joi.string()
      .min(1)
      .presence(forUpdate ? "optional" : "required"),
    deadLine: Joi.date().presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const create = async ({
  additionalInformation,
  deadLine,
  attachedFiles,
  customer,
}) => {
  return await db.estimate.create({
    data: {
      deadLine: new Date(deadLine),
      additionalInformation,
      createDate: new Date(Date.now()),
      customer,
    },
  });
};
module.exports = { ValidateEstimate, create };
