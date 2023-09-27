// routes/protected.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Example of a protected route
router.get('/protected', auth, (req, res) => {
  // You can access the authenticated user's ID using req.userData.userId
  const userId = req.userData.userId;

  // Your protected route logic here
});

module.exports = router;
