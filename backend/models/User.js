const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        match: /^\d{3}-\d{3}-\d{4}$/,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
