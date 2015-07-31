var express = require('express');
var router = express.Router();

router.get('/2015-laurier-society-philanthropy-awards', function(req, res) {
  res.render('highlight5', { title: 'Express' });
});

module.exports = router;
