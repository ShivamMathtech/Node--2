const express = require("express");
const { m1, m2 } = require("./middleware/mymiddleware");
const app = express();
require("dotenv").config();
app.use(express.json());
// import m1 from "./middleware/mymiddleware";
app.post(
  "/shivam",
  (req, res, next) => {
    next();
  },
  m1,
  m2,
  function (req, res) {
    let name = req.body.name;
    let surname = req.body.surname;
    res.send({ msg: `Hi ${name} ${surname} , How are you` });
  }
);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
