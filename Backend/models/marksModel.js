var mongoose = require("mongoose");

var marksSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  distributed_computing: {
    type: Number,
    required: false,
  },
  data_structures: {
    type: Number,
    required: false,
  },
  database_systems: {
    type: Number,
    required: false,
  },
  software_engineering: {
    type: Number,
    required: false,
  },
  big_data: {
    type: Number,
    required: false,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Marks = mongoose.model("Marks", marksSchema);
module.exports = Marks;
