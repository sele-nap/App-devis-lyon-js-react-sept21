// import {
//   ValidateProduct,
//   updateProduct,
//   getOneProduct,
//   deleteOneProduct,
// } from "../../../models/product";
// import base from "../../../middleware/commons";
// // import { requireAdmin } from "../../../middleware/requireAdmin";

// async function handlePatch({ query: { id }, body }, res) {
//   const validationErrors = ValidateProduct(body, true);
//   if (validationErrors) return res.status(422).send(validationErrors);
//   const updated = await updateProduct(id, body);
//   console.log(updated);
//   if (updated) res.status(200).send(updated);
//   else res.status(404).send();
// }

// async function handleGetOne({ query: { id } }, res) {
//   const product = await getOneProduct(id);
//   if (product) res.send(product);
//   else res.status(404).send();
// }

// async function handleDelete({ query: { id } }, res) {
//   if (await deleteOneProduct(id)) res.status(204).send();
//   else res.status(404).send();
// }

// export default base()
//   // .use(requireAdmin)
//   .get(handleGetOne)
//   .patch(handlePatch)
//   .delete(handleDelete);
