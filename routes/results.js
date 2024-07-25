
const express = require('express');
const router = express.Router();
const Result = require('../models/Result');


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


