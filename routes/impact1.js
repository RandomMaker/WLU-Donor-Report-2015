var express = require('express');
var router = express.Router();

router.get('/academic-program-development', function(req, res) {
  res.render('impact1', { title: 'Express' });
});

module.exports = router;
