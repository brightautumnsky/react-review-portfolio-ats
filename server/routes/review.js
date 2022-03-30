const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Review } = require("../models/Review");
const { auth } = require("../middleware/auth");

// 이미지
var storage = multer.diskStorage({
  // 저장하는 위치
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  // 파일 이름
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
var upload = multer({ storage: storage }).single("file");

router.post("/image", auth, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

// 리뷰 저장
router.post("/write", auth, (req, res) => {
  const review = new Review(req.body);
  review.save((err) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true });
  });
});

// 리뷰 불러오기
router.post("/get", (req, res) => {
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let filters = req.body.filters;
  let keyword = req.body.keyword;
  let findArgs = {};

  for (let key in filters) {
    if (filters[key].length > 0) {
      findArgs[key] = filters[key];
    }
  }

  // 리뷰 검색
  if (keyword) {
    Review.find(findArgs)
      .find({ $text: { $search: keyword } })
      .populate("writer")
      .skip(skip)
      .limit(limit)
      .exec((err, reviews) => {
        if (err) {
          return res.status(400).json({ success: false, err });
        }
        return res
          .status(200)
          .json({ success: true, reviews, postSize: reviews.length });
      });
  } else {
    Review.find(findArgs)
      .populate("writer")
      .skip(skip)
      .limit(limit)
      .exec((err, reviews) => {
        if (err) {
          return res.status(400).json({ success: false, err });
        }
        return res
          .status(200)
          .json({ success: true, reviews, postSize: reviews.length });
      });
  }
});

// 상세 리뷰
router.get("/review_by_id", (req, res) => {
  let type = req.query.type;
  let id = req.query.id;

  Review.find({ _id: id })
    .populate("writer")
    .exec((err, review) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, review });
    });
});

// 리뷰 삭제
router.post("/delete", (req, res) => {
  let title = req.body.title;

  Review.deleteOne({ title }, (err, review) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({ success: true, review });
  });
});

module.exports = router;
