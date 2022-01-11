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
        status: "DRAFT",
      },
      {
        deadLine: "2021-05-25T14:21:00+02:00",
        additionalInformation:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        userId: 3,
      },
    ],
  });
}
seed();

export default seed;
