const BaseController = require("./baseController");
const marksModel = require("../models/marksModel");
class Marks extends BaseController {
  constructor() {
    super(marksModel, Marks);
  }
}
module.exports = new Marks();
