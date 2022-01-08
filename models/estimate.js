const db = require("../db");
const Joi = require("joi");
const format = require("@joi/date");

const ValidateEstimate = (data, forUpdate = false) => {
  return Joi.object({
    additionalInformation: Joi.string().presence(
      forUpdate ? "optional" : "required"
    ),
    deadLine: Joi.date()
      // .format(["YYYY-MM-DD", "DD-MM-YYYY"])
      .presence(forUpdate ? "optional" : "required"),
    customer: Joi.string(),
    status: Joi.string().presence("optional"),
    attachedFiles: Joi.string(),
  }).validate(data, { abortEarly: false }).error;
};

const createAskEstimate = async ({
  additionalInformation,
  deadLine,
  attachedFiles,
  customer,
  status,
}) => {
  return await db.estimate.create({
    data: {
      deadLine: new Date(deadLine),
      additionalInformation,
      createDate: new Date(Date.now()),
      customer,
      status,
      attachedFiles,
    },
  });
};

const createFiles = async ({ name, estimate }) => {
  return await db.attachedFile.create({
    data: {
      name,
      estimate,
    },
  });
};

const updateAskEstimate = async (
  additionalInformation,
  deadLine
  //attachedFiles
) => {
  return db.estimate
    .patch({ where: { additionalInformation, deadLine, attachedFiles } })
    .catch(() => false);
};

module.exports = {
  ValidateEstimate,
  createAskEstimate,
  updateAskEstimate,
  createFiles,
};
