const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Question API...' }))

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/questions', require('./routes/questions'));


const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));