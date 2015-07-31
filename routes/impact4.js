var express = require('express');
var router = express.Router();

router.get('/student-financial-support', function(req, res) {
  res.render('impact4', { title: 'Express' });
});

module.exports = router;
