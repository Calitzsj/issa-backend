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

// Upload target (simpl
# Check file structure
find . -type f -name "*.js" -o -name "*.json" -o -name ".env" -o -name ".gitignore" | sort



cd
cd..# middleware/auth.js
cat > middleware/auth.js << 'EOF'
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { auth };
