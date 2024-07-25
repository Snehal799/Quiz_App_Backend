
const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// Route to handle result submission
router.post('/', async (req, res) => {
  const { userName, email, correct, incorrect, unattempted } = req.body;

  // Check if all fields are provided
  if (!userName || !email || correct === undefined || incorrect === undefined || unattempted === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newResult = new Result({
      userName,
      email,
      correct,
      incorrect,
      unattempted,
    });

    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    console.error('Error saving result:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all results
router.get('/', async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;


