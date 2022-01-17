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
          "Trois petits chats, trois petits chats, trois petits chats chats chats",
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
        additionalInformation: "404 ERROR",
        userId: 2,
      },
      {
        deadLine: "2021-05-25T14:21:00+02:00",
        additionalInformation:
          "Plays league of legends. Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food touch water with paw then recoil in horror show belly so cats go for world domination. ",
        userId: 3,
        status: "DRAFT",
      },
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "Kitty time woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now so lasers are tiny mice yet i want to go outside let me go outside nevermind inside is better.",
        userId: 2,
        status: "WAITING_FOR_VALIDATION",
      },
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "Purrrrrr the best thing in the universe is a cardboard box yet play with twist ties have secret plans i just saw other cats inside the house and nobody ask me before using my litter box but gnaw the corn cob stare at owner accusingly then wink.",
        userId: 3,
        status: "VALIDATED",
      },
    ],
  });
}
seed();

export default seed;
