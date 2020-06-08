//jshint esversion:6
// ===================================== requiring node modules ===================================== //
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


// ==================================== document schema=======================================//
const materialSchema = new mongoose.Schema({
    material_code: { type: String },
    material_name: { type: String },
    material_unit_price: { type: String },
    material_stock_level: { type: String },
});

driverSchema.plugin(passportLocalMongoose);

// ==================================== creating schema model =========================================//
module.exports = mongoose.model('material', materialSchema);