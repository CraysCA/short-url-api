const { linkRepository } = require("../repositories");
const { create, get } = linkRepository;

const createLink = async (request, response, next) => {
  const { url } = request.body;
  try {
    const generateRandomString = (num) => {
      return Math.random().toString(36).substring(0, num);
    };
    const hash = generateRandomString(7);

    const completedUrl = "http://".concat(url);

    const data = { url: completedUrl, hash };
    const linkCreated = await create({ data });

    response.status(200).json({
      success: true,
      message: "link created",
      data: linkCreated,
    });
  } catch (error) {
    console.error(error);
  }
};

const getLink = async (request, response, next) => {
  const { hash } = request.params;
  try {
    const returnLink = await get({ hash });

    if (returnLink) {
      const { url } = returnLink.dataValues;
      response.redirect(url);
    } else {
      response.status(404).json({ success: true, message: "unautorized" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createLink, getLink };
