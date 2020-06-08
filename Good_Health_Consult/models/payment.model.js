//jshint esversion:6
// ===================================== requiring node modules ===================================== //
const mongoose = require('mongoose');

// ==================================== creating database schema=======================================//
const paymentSchema = mongoose.Schema({
    // payment information
    patient_name: String,
    payment_date: { type: Date, default: Date.now },
    amount: String,
    balance: String,
});

// exporting user schema.
module.exports = {
    payment: mongoose.model('payment', paymentSchema),
    paymentSchema: paymentSchema
};
