
const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

router.post('/api/results', async (req, res) => {
    const { userName, email, score, correct, incorrect, unattempted } = req.body;
  
    console.log('Received data:', { userName, email, score, correct, incorrect, unattempted });
  
    if (!userName || !email || score === undefined || correct === undefined || incorrect === undefined || unattempted === undefined) {
      console.log('Validation failed:', { userName, email, score, correct, incorrect, unattempted });
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const result = new Result({ userName, email, score, correct, incorrect, unattempted });
      await result.save();
      res.status(201).json({ message: 'Result saved successfully' });
    } catch (error) {
      console.error('Error saving result:', error);
      res.status(500).json({ message: 'Error saving result', error });
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


