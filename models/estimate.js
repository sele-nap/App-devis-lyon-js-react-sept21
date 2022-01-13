const db = require("../db");
const Joi = require("joi");

const ValidateEstimate = (data, forUpdate = false) => {
  return Joi.object({
    additionalInformation: Joi.string().presence(
      forUpdate ? "optional" : "required"
    ),
    deadLine: Joi.date().presence(forUpdate ? "optional" : "required"),

    // customer: Joi.string(),
    status: Joi.string().presence("optional"),
    attachedFiles: Joi.string().presence("optional"),
  }).validate(data, { abortEarly: false }).error;
};

const estimateToShow = {
  id: true,
  deadLine: true,
  additionalInformation: true,
  customer: true,
  status: true,
  validationDate: true,
  createDate: true,
  adminCommnent: true,
};

const getEstimates = async () => {
  return db.estimate.findMany({
    select: estimateToShow,
  });
};

const getOneEstimate = (id) => {
  return db.estimate.findUnique({
    where: { id: parseInt(id, 10) },
    select: estimateToShow,
  });
};

const deleteOneEstimate = (id) => {
  return db.estimate
    .delete({ where: { id: parseInt(id, 10) } })
    .catch((_) => false);
};

const createAskEstimate = async ({
  additionalInformation,
  deadLine,
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
    },
  });
};

const createFiles = async ({ name, estimate, url }) => {
  return await db.attachedFile.create({
    data: {
      name,
      estimate,
      url,
    },
  });
};

const updateEstimate = (id, data) => {
  return db.estimate
    .update({ where: { id: parseInt(id, 10) }, data })
    .catch(() => false);
};

module.exports = {
  ValidateEstimate,
  createAskEstimate,
  updateEstimate,
  createFiles,
  getEstimates,
  getOneEstimate,
  deleteOneEstimate,
};
