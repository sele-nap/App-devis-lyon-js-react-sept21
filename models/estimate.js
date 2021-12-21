const db = require("../db");
const Joi = require("joi");

const ValidateEstimate = (data, forUpdate = false) => {
  return Joi.object({
    additionalInformation: Joi.string().presence(
      forUpdate ? "optional" : "required"
    ),
    deadLine: Joi.string().presence(forUpdate ? "optional" : "required"),
    customer: Joi.string(),
    // attachedFiles: Joi.string().presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const createAskEstimate = async ({
  additionalInformation,
  deadLine,
  // attachedFiles,
  customer,
}) => {
  return await db.estimate.createAskEstimate({
    data: {
      deadLine,
      additionalInformation,
      createDate: Date(Date.now()),
      customer,
    },
  });
};

const updateAskEstimate = async (
  additionalInformation,
  deadLine,
  attachedFiles
) => {
  return db.estimate
    .patch({ where: { additionalInformation, deadLine, attachedFiles } })
    .catch(() => false);
};

module.exports = { ValidateEstimate, createAskEstimate, updateAskEstimate };
