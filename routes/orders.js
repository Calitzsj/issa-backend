const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Create order
router.post('/', async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod } = req.body;
    
    // Calculate total
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const shipping = subtotal > 100 ? 0 : 15;
    const total = subtotal + tax + shipping;

    const order = {
      orderNumber: `ISSA-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      items,
      subtotal,
      tax,
      shipping,
      total,
      shippingAddress,
      paymentMethod,
      orderStatus: 'processing',
      createdAt: new Date()
    };

    res.status(201).json({
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
});

// Get user's orders
router.get('/my-orders', async (req, res) => {
  try {
    const orders = [
      {
        _id: '1',
        orderNumber: 'ISSA-2024-001',
        items: [
          {
            product: {
              name: 'iSSA Pro Jersey',
              price: 65
            },
            quantity: 1,
            price: 65
          }
        ],
        total: 70.20,
        orderStatus: 'delivered',
        createdAt: new Date('2024-01-15')
      }
    ];

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

module.exports = router;
