const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const { User } = require("./models/User");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/auth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require("mongoose");
const config = require("./config/key");
mongoose
  .connect(
    config.mongoURI,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongoDB 연결 완료"))
  .catch((e) => console.log(e));

// user
app.use("/api/users", require("./routes/users"));
// review
app.use("/api/review", require("./routes/review"));

app.use("/uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port} ^^`));
