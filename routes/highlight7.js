var express = require('express');
var router = express.Router();

router.get('/imagine-canada', function(req, res) {
  res.render('highlight7', { title: 'Express' });
});

module.exports = router;
