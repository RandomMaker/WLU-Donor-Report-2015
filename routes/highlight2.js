var express = require('express');
var router = express.Router();

router.get('/entrepreneurship-gets-a-boost', function(req, res) {
  res.render('highlight2', { title: 'Express' });
});

module.exports = router;
