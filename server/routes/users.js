const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

// 회원가입
router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      user,
    });
  });
});

// 로그인
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      user.generateToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }
        // 토큰 저장
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id, user });
      });
    });
  });
});

// 로그아웃
router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id }, // 미들웨어에서 가져온 id를 통해 유저 정보를 찾는다
    { token: "" }, // 두번째 객체에서는 토큰을 지워준다
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
        user,
      });
    }
  );
});

// 권한 체크
router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    // client에 정보 전달
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

module.exports = router;
