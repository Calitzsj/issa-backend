const express = require('express');
const Target = require('../models/Target');

const router = express.Router();

// Get user's targets
router.get('/my-targets', async (req, res) => {
  try {
    const targets = [
      {
        _id: '1',
        discipline: { name: 'Precision Target Shooting', icon: '🎯' },
        image: { url: '/images/target-sample.jpg' },
        scores: {
          totalPoints: 177,
          accuracy: 88.5,
          totalShots: 20,
          hits: 18
        },
        match: {
          name: 'Weekly Practice',
          type: 'practice'
        },
        createdAt: new Date()
      }
    ];

    res.json({ targets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching targets' });
  }
});

// Upload target (simple version for now)
// Check file structure

module.exports = router;
