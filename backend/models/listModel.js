//in this file im going to create a model and a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("BucketList", bucketSchema);
