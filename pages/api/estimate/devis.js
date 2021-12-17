import base from "../../../middleware/commons";
import {create, estimate}from "../../../models/devis";


async function handler(req, res) {
    const validationError = validateEstimate(req.body);
    console.log(validationError);
    if (validationError) return res.status(422).send(validationError);
    if (await estimateAlreadyExists(req.body.estimate))
      return res.status(409).send("This email already exists");
    const newEstimate = create(req.body);
   
    res.status(201).send(newEstimate);