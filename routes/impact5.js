var express = require('express');
var router = express.Router();

router.get('/beyond-the-classroom', function(req, res) {
  res.render('impact5', { title: 'Express' });
});

module.exports = router;
