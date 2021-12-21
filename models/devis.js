const db = require("../db");
const Joi = require("joi");

const ValidateEstimate = (data, forUpdate = false) => {
  return Joi.object({
    // customer: Joi.string.presence(),
    additionalInformation: Joi.string()
      .min(1)
      .presence(forUpdate ? "optional" : "required"),
    deadLine: Joi.date().presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const create = async ({
  additionalInformation,
  deadLine,
  // attachedFiles,
  customer,
  status,
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
