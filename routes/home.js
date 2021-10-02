const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.end('Make a request to /bridegroom/:id');
});

module.exports = router;
