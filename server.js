const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');  // Correct path to db.js
const questionRoutes = require('./routes/questions');  // Correct path to questions.js
// const userRoutes = require('./routes/users');  // Correct path to users.js
const resultRoutes = require('./routes/results');  // Correct path to results.js

dotenv.config();
connectDB();

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/questions', questionRoutes);

app.use('/api/results', resultRoutes);

app.get('/', (req, res) => {
    res.send('Quiz API is running');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


