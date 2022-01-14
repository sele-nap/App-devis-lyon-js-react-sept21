import base from "../../../middleware/commons";

import {
  createProduct,
  getProducts,
  ValidateProduct,
} from "../../../models/product";

const handleGet = async (req, res) => {
  res.send(await getProducts());
};

async function handlePost(req, res) {
  const validationError = ValidateProduct(req.body);
  if (validationError) return res.status(422).send(validationError);
  const newProduct = await createProduct({
    ...req.body,
  });
  res.status(201).send(newProduct);
}

export default base().post(handlePost).get(handleGet);
