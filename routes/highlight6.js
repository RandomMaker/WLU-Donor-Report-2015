var express = require('express');
var router = express.Router();

router.get('/afp-philanthropists-of-the-year', function(req, res) {
  res.render('highlight6', { title: 'Express' });
});

module.exports = router;
