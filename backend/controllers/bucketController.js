const BucketList = require("../models/listModel");
const mongoose = require("mongoose");
//basically a controller is used to write logic of post method,get method,delete method
//and use that logic inside router file to reduce the code complexity in router file

//get all documents
const getAllBuckects = async (req, res) => {
  const buckets = await BucketList.find({}).sort({createdAt: -1});
  res.status(200).json(buckets);
};

//get a single document
const getOneBucket = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({error: "No such Id value"});
  }
  const bucket = await BucketList.findById(id);
  if (!bucket) {
    res.status(500).json({error: "No such document is found"});
  }

  res.status(200).json(bucket);
};

//insert a document
const createBucket = async (req, res) => {
  const {title, cost, days} = req.body;
  const empty = [];
  if (!title) {
    empty.push("title");
  }
  if (!cost) {
    empty.push("cost");
  }
  if (!days) {
    empty.push("days");
  }
  if (empty.length > 0) {
    return res.status(400).json({error: "Pleate Fill all fields", empty});
  }

  try {
    const bucket = await BucketList.create({title, cost, days});
    res.status(200).json(bucket);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

//delete a doucment
const deleteBucket = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({error: "No such Id value"});
  }
  const bucket = await BucketList.findByIdAndDelete(id);
  if (!bucket) {
    res.status(500).json({error: "No such document is found"});
  }

  res.status(200).json(bucket);
};

//update a document
const updateBucket = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({error: "No such Id value"});
  }
  const bucket = await BucketList.findOneAndUpdate(
    {_id: id},
    {
      ...req.body,
    }
  );
  if (!bucket) {
    res.status(500).json({error: "No such document is found"});
  }
  res.status(200).json(bucket);
};
//export
module.exports = {
  createBucket,
  getAllBuckects,
  getOneBucket,
  deleteBucket,
  updateBucket,
};
