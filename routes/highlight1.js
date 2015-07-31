var express = require('express');
var router = express.Router();

router.get('/foundation-renews-support', function(req, res) {
  res.render('highlight1', { title: 'Express' });
});

module.exports = router;
