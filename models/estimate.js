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

const estimateToShow = {
  id: true,
  deadLine: true,
  additionalInformation: true,
  customer: true,
  status: true,
};

const getEstimates = async ({ statusList }) => {
  console.log(statusList)
  return db.estimate.findMany({
    where: { status: {in: statusList} },
    select: estimateToShow,
  });
};
export const getOneEstimate = (id) => {
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

const updateAskEstimate = async (id, data) => {
  return db.estimate.update({ where: { id : parseInt(id, 10)}, data });
};

module.exports = {
  ValidateEstimate,
  createAskEstimate,
  updateAskEstimate,
  createFiles,
  getEstimates,
  getOneEstimate,
  deleteOneEstimate,
};
