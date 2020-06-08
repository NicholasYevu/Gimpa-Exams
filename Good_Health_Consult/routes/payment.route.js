// jshint esversion:6
// ================================ creating list application route ===================================//
module.exports = app => {
    const payment = require('../controllers/payment.controller');

    //========================================== app users routes ============================================//
    app.route('/payment')
        .get((req, res, next) => {
            res.render(__dirname + './../views/createPayment.views.ejs');
        });

    app.route('/create_payment')
        .post(payment.createPayment);

    app.route('/get_payment')
        .get(payment.getPayment);        
};
