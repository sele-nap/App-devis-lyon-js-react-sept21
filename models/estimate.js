const db = require("../db");
const Joi = require("joi");

const ValidateEstimate = (data, forUpdate = false) => {
  return Joi.object({
    additionalInformation: Joi.string().presence(
      forUpdate ? "optional" : "required"
    ),
    deadLine: Joi.date().presence(forUpdate ? "optional" : "required"),
    status: Joi.string().presence("optional"),
    attachedFiles: Joi.string().presence("optional"),
    adminComment: Joi.string().presence("optional"),
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
  adminComment: true,
};

const getEstimates = async ({
  statusList,
  limit,
  offset,
  customerId,
  orderBy,
}) => {
  return Promise.all([
    db.estimate.findMany({
      where: { status: { in: statusList }, customer: { id: customerId } },
      select: estimateToShow,
      take: parseInt(limit),
      skip: parseInt(offset),
      orderBy,
    }),
    db.estimate.count({
      where: { status: { in: statusList }, customer: { id: customerId } },
    }),
  ]);
};

const getOneEstimate = (id) => {
  return db.estimate.findUnique({
    where: { id: parseInt(id, 10) },
    select: estimateToShow,
  });
};

const getOneEstimateAttachedFiles = (id) => {
  return db.estimate.findUnique({
    where: { id: parseInt(id, 10) },
    include: { attachedFiles: true, customer: true },
  });
};

const getEstimate = (id) => {
  return db.estimate.findUnique({
    where: { id: parseInt(id, 10) },

    include: { customer: true },
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
  validationCode,
  adminComment,
}) => {
  return await db.estimate.create({
    data: {
      deadLine: new Date(deadLine),
      additionalInformation,
      createDate: new Date(Date.now()),
      customer,
      status,
      validationCode,
      adminComment,
    },
  });
};

const createFiles = async ({ name, estimate, url, creator }) => {
  return await db.attachedFile.create({
    data: {
      name,
      estimate,
      url,
      creator,
    },
  });
};

// const updateAskEstimate = async (id, data) => {
//   return db.estimate.update({ where: { id: parseInt(id, 10) }, data });
// };

const updateAskEstimate = async (id, data) => {
  return db.estimate.update({
    where: { id: parseInt(id, 10) },
    data: { waitingDate: new Date(Date.now()), ...data },
  });
};

const validateEstimate = (id, status, validationCode) => {
  return db.estimate
    .update({ where: { id: parseInt(id, 10) }, status, validationCode })
    .catch(() => false);
};
const confirmEstimate = async (validationCode) => {
  try {
    if (await db.estimate.findUnique({ where: { validationCode } })) {
      await db.estimate.update({
        where: { validationCode },
        data: {
          validationCode: null,
          status: "VALIDATED",
          validationDate: new Date(Date.now()),
        },
      });
      return true;
    }
  } catch (err) {
    console.error(err);
  }
  return false;
};

module.exports = {
  ValidateEstimate,
  createAskEstimate,
  updateAskEstimate,
  createFiles,
  getEstimates,
  getOneEstimate,
  deleteOneEstimate,
  getEstimate,
  confirmEstimate,
  validateEstimate,
  getOneEstimateAttachedFiles,
};
