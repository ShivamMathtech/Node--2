let m1 = (req, rea, next) => {
  console.log(req.body);
  req.body.name = req.body.name.toUpperCase();
  req.body.surname = req.body.surname.toUpperCase();
  console.log(req.body);
  next();
};
let m2 = (req, res, next) => {
  next();
};
module.exports = { m1, m2 };
