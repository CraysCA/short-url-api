require("dotenv").config();

const serverSettings = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  },
  port: process.env.PORT,
};

module.exports = serverSettings;
