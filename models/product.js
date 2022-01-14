const db = require("../db");
const Joi = require("joi");

const ValidateProduct = (data, forUpdate = false) => {
  return Joi.object({
    name: Joi.string().presence(forUpdate ? "optional" : "required"),
    unitPrice: Joi.number().presence(forUpdate ? "optional" : "required"),

    description: Joi.string(),
  }).validate(data, { abortEarly: false }).error;
};

const productToShow = {
  id: true,
  name: true,
  unitPrice: true,
  description: true,
};

const getProducts = async () => {
  return db.product.findMany({
    select: productToShow,
  });
};

const getOneProduct = (id) => {
  return db.product.findUnique({
    where: { id: parseInt(id, 10) },
    select: productToShow,
  });
};

const deleteOneProduct = (id) => {
  return db.product
    .delete({ where: { id: parseInt(id, 10) } })
    .catch((_) => false);
};

const createProduct = async ({ name, unitPrice, description }) => {
  return await db.product.create({
    data: {
      name,
      unitPrice,
      description,
    },
  });
};

const updateProduct = (id, data) => {
  return db.product
    .update({ where: { id: parseInt(id, 10) }, data })
    .catch(() => false);
};

module.exports = {
  ValidateProduct,
  createProduct,
  updateProduct,
  getProducts,
  getOneProduct,
  deleteOneProduct,
};
