var express = require('express');
var router = express.Router();

router.get('/building-canadas-best-business-school', function(req, res) {
  res.render('highlight4', { title: 'Express' });
});

module.exports = router;
