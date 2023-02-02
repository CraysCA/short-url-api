const db = require("../db/models");

const create = async ({ data }) => {
  return await linkTable.create(data);
};

const get = async ({ hash }) => {
  return await linkTable.findOne({ where: { hash } });
};

module.exports = { create, get };
