const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlengh: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },

  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  // 비밀번호 변경
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// 유저가 있다면, comparePassword라는 메소드를 User.js 모델에서 생성
userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// index에서 비밀번호가 일치하면 token 생성
userSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), "secretToken"); // 토큰 생성

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);

    cb(null, user);
  });
};

// auth 복호화를 위한 메소드
userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  // 토큰을 verify를 통해 decode
  jwt.verify(token, "secretToken", function (err, decoded) {
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);

      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
