const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// POST a new question
router.post('/', async (req, res) => {
    const { question, options, correctAnswer } = req.body;

    // Validate input
    if (!question || !options || !correctAnswer) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newQuestion = new Question({ question, options, correctAnswer });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET all questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;



