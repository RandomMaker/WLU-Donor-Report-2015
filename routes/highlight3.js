var express = require('express');
var router = express.Router();

router.get('/momentum-builds-for-brantford-ymca', function(req, res) {
  res.render('highlight3', { title: 'Express' });
});

module.exports = router;
