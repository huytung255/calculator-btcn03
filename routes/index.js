var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { isChecked_plus: false, isChecked_substract: false, isChecked_multiply: false, isChecked_divide: false });
});

router.post('/', (req, res) => {
  var body = req.body;
  var firstnum = parseFloat(body.firstnum);
  var secondnum = parseFloat(body.secondnum);
  var sign = body.sign;
  var result;
  var isChecked_plus = false;
  var isChecked_substract = false;
  var isChecked_multiply = false;
  var isChecked_divide = false;
  switch (sign) {
    case "plus":
      result = firstnum + secondnum;
      isChecked_plus = true;
      break;
    case "substract":
      result = firstnum - secondnum;
      isChecked_substract = true;
      break;
    case "multiply":
      result = firstnum * secondnum;
      isChecked_multiply = true;
      break;
    case "divide":
      result = firstnum / secondnum;
      isChecked_divide = true;
      break;
  }
  res.render('index', { firstnum: firstnum, result: result, secondnum: secondnum,isChecked_plus: isChecked_plus, isChecked_substract: isChecked_substract, isChecked_multiply: isChecked_multiply, isChecked_divide: isChecked_divide });
});


module.exports = router;
