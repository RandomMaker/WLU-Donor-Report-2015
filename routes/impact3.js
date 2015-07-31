var express = require('express');
var router = express.Router();

router.get('/learning-and-study-space', function(req, res) {
  res.render('impact3', { title: 'Express' });
});

module.exports = router;
