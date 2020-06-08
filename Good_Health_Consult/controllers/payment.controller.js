// jshint esversion:6
require('dotenv').config({ path: __dirname + './../.env' });

//====================================== requiring modules ===========================================//
// node modules

// custom models
const payment = require('../models/payment.model').payment;
const election = require('../models/election.model');

//================================== creating HTTP handler methods ==================================//
// user authentication and logging
exports.createPayment = (req, res) => {   
    payment.create({
        patient_name: req.body.patient_name,
        amount: req.body.amount,
        balance: req.body.balance,
    }).then(() => {
        console.log(`Payment recorded successful 😎😎`);
        election.find({}, (err, electionResults) => {
            if(err){
                res.send({msg: `Can't get election results. Please try again in a minute.`});
            }else{
                // res.render(__dirname + './../views/home.views.ejs', {results: electionResults, msg: `Recorded payment.`});
                res.redirect('/get_payment');
            }
        });
    }).catch((err) => {
        res.send({err: `${err}`});
    });
};

exports.getPayment = (req, res) => {
    payment.find({}).then((docs) => {
        console.log(`Payment recorded successful 😎😎`);
        res.render(__dirname + './../views/getPaymentList.views.ejs', {payments: docs});
    }).catch((err) => {
        res.send({err: `${err}`});
    });
};