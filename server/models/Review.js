const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 100,
    },
    singer: { type: String, maxlength: 50 },
    review: {
      type: String,
    },
    image: {
      type: Array,
      default: [],
    },
    genre: {
      type: String,
      default: "",
    },
    genreNum: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 2.5,
    },
    hashtag: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

reviewSchema.index(
  {
    title: "text",
    singer: "text",
  },
  {
    weights: {
      title: 5,
      singer: 3,
    },
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
