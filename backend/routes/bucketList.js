const express = require("express");
const {
  getAllBuckects,
  createBucket,
  getOneBucket,
  deleteBucket,
  updateBucket,
} = require("../controllers/bucketController");

const router = express.Router();
// const BucketList = require("../models/listModel");
// this is used in controller file instead of here//

//GET ALL
router.get("/", getAllBuckects);

//POST
router.post("/", createBucket);

//GET ONE
router.get("/:id", getOneBucket);

//DELETE
router.delete("/:id", deleteBucket);

//PATCH
router.patch("/:id", updateBucket);

module.exports = router;
