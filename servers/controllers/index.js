const newsController = require("./newsController");
const newsstatsController = require("./newsstatsControllers");

module.exports = {
    news: newsController,
    stats: newsstatsController
}