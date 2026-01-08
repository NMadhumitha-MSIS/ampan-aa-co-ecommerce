const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = "mongodb://localhost:27017/AA&Co/test1";
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected to AA&Co'))
    .catch(err => console.error('MongoDB connection error:', err));
    
// Routes

app.use('/api/users', userRoutes);
app.use(express.json());


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
