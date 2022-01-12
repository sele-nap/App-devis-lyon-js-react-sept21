import { FaDraft2Digital } from "react-icons/fa";

const { hashPassword } = require("../models/user");
const db = require("../db");

async function seed() {
  await db.user.deleteMany();
  await db.user.createMany({
    data: [
      {
        email: "admin@website.com",
        role: "admin",
        hashedPassword: await hashPassword("verysecure"),
        address1: "10 rue du commerce",
        city: "LYON",
        firstname: "Jean-Michel",
        lastname: "La Médaille",
        managerName: "Eric La Coupe",
        organizationName: "Lyon Décoration",
        phone: "0123456789",
        siretNumber: "48488345900014",
        zipCode: "69006",
      },
      {
        email: "client@website.com",
        role: "client",
        hashedPassword: await hashPassword("genreverysecure"),
        address1: "25 rue de la clientèle",
        city: "VILLEURBANNE",
        firstname: "Micheline",
        lastname: "Le Drapeau",
        phone: "0123456789",
        zipCode: "69006",
      },
      {
        email: "trèsbonclient@website.com",
        role: "client",
        hashedPassword: await hashPassword("pastropsecure"),
        address1: "20 rue de la fidélité",
        city: "LYON",
        firstname: "Pierre",
        lastname: "Echarpe",
        managerName: "Maire de Lyon",
        organizationName: "Mairie du 12ème",
        phone: "0123456789",
        siretNumber: "48488345900014",
        zipCode: "69012",
      },
    ],
  });
  await db.estimate.deleteMany();
  await db.estimate.createMany({
    data: [
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar massa vel tincidunt suscipit.",
        userId: 2,
        status: "TO_DO",
      },
      {
        deadLine: "2021-05-25T14:21:00+02:00",
        additionalInformation: "Des médailles pour mon chat svp, merci.",
        userId: 3,
        status: "DRAFT",
      },
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "10 médailles, 100 écharpes, 3 coupes et 4 chocolats, svp",
        userId: 2,
        status: "WAITING_FOR_VALIDATION",
      },
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "Cat ipsum dolor sit amet, poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls, stuff and things. If human is on laptop sit on the keyboard russian blue and headbutt owner's knee. .",
        userId: 3,
        status: "TO_DO",
      },
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar massa vel tincidunt suscipit.",
        userId: 2,
      },
      {
        deadLine: "2021-05-25T14:21:00+02:00",
        additionalInformation: "Des médailles pour mon chat svp, merci.",
        userId: 3,
        status: "DRAFT",
      },
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "10 médailles, 100 écharpes, 3 coupes et 4 chocolats, svp",
        userId: 2,
        status: "WAITING_FOR_VALIDATION",
      },
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "Cat ipsum dolor sit amet, poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls, stuff and things. If human is on laptop sit on the keyboard russian blue and headbutt owner's knee. .",
        userId: 3,
        status: "VALIDATED",
      },
    ],
  });
}
seed();

export default seed;
