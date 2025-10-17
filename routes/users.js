const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Get user dashboard data
router.get('/dashboard', async (req, res) => {
  try {
    const dashboardData = {
      user: {
        firstName: 'Alex',
        lastName: 'Marksman',
        memberId: 'ISSA-2024-8472',
        membershipType: 'premium'
      },
      stats: {
        totalMatches: 24,
        averageAccuracy: 88.5,
        bestScore: 195,
        disciplines: 3
      },
      recentTargets: [
        {
          _id: '1',
          discipline: { name: 'Precision Target Shooting' },
          scores: { totalPoints: 177, accuracy: 88.5 },
          createdAt: new Date()
        }
      ],
      classifications: [
        {
          _id: '1',
          discipline: { name: 'Precision Target Shooting', icon: '🎯' },
          currentLevel: 'Expert',
          progress: 78,
          nextLevel: 'Master'
        }
      ]
    };

    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data' });
  }
});

// Get user documents
router.get('/documents', async (req, res) => {
  try {
    const documents = [
      {
        id: 1,
        type: 'membership',
        name: 'Membership Certificate',
        description: 'Official iSSA membership documentation',
        downloadUrl: '/api/documents/membership-certificate',
        issuedDate: new Date()
      },
      {
        id: 2,
        type: 'classification',
        name: 'Classification Card',
        description: 'Current shooting classification status',
        downloadUrl: '/api/documents/classification-card',
        issuedDate: new Date()
      }
    ];

    res.json({ documents });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents' });
  }
});

module.exports = router;
