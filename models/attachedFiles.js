const db = require("../db");
const Joi = require("joi");

const createFiles = async ({ name, estimate, url }) => {
  return await db.attachedFile.create({
    data: {
      name,
      estimate,
      url,
    },
  });
};

const deleteFiles = async (id) => {
  return await db.attachedFile
    .delete({ where: { id: parseInt(id, 10) } })
    .catch((_) => false);
};

module.exports = {
  createFiles,
  deleteFiles,
};
