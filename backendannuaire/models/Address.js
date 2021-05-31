const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    name: { type: String, required: true },
    firstname: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
});

module.exports = mongoose.model('Address', addressSchema);