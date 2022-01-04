const { hashPassword } = require("../models/user");
const db = require("../db");

async function seed() {
  await db.user.deleteMany();
  await db.user.create({
    data: {
      email: "admin@website.com",
      role: "admin",
      hashedPassword: await hashPassword("verysecure"),
    },
  });
  await db.estimate.deleteMany();
  await db.estimate.createMany({
    data: [
      {
        deadLine: "2022-03-19T14:21:00+02:00",
        additionalInformation:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar massa vel tincidunt suscipit.",
      },
      {
        deadLine: "2022-05-25T14:21:00+02:00",
        additionalInformation:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
    ],
  });
}
seed();

export default seed;
