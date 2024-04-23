const _ = require("lodash");
const bcrypt = require("bcryptjs");
const prisma = require("./prisma");

// DOTENV
require("dotenv").config();

async function initSU() {
  const su = await prisma.user.findUnique({
    where: {
      email: process.env.SU_EMAIL
    }
  });

  if (_.isEmpty(su)) {
    bcrypt.hash(process.env.SU_PWD, 12).then(async (password) => {
      await prisma.user.create({
        data: {
          name: process.env.SU_NAME,
          lastname: process.env.SU_LASTNAME,
          email: process.env.SU_EMAIL,
          password: password,
          role: process.env.SU_ROLE
        }
      });
    });
  }
}

module.exports = initSU;
