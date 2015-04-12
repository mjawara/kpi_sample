var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/partials/main', function(req, res) {
  res.render('partials/main');
});

router.get('/partials/kpi/main', function (req, res) {
    res.render('partials/kpi/Main');
});

module.exports = router;
