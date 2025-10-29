const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Disciplines API' });
});

module.exports = router;
