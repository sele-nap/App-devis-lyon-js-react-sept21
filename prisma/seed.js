const { hashPassword } = require('../models/user');
const db = require('../db');

async function seed() {
  await db.user.deleteMany();
  await db.user.create({
    data: {
      email: 'admin@website.com',
      role: 'admin',
      hashedPassword: await hashPassword('verysecure'),
    },
  });
}
seed();

export default seed;
