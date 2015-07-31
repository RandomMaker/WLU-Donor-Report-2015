var express = require('express');
var router = express.Router();

router.get('/research-excellence', function(req, res) {
  res.render('impact2', { title: 'Express' });
});

module.exports = router;
