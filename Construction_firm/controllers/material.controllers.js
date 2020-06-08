// jshint esversion:6
// ===================== node modules ======================

// =================== custom modules ======================
const driver = require(`../models/material.models`);
// exports
exports.createMaterial = (req, res, next) => {
    console.log(`Create Driver Account`);
    console.log(req.body);
    
    driver.create({
        material_code: req.body.material_code,
        material_name: req.body.material_name,
        material_unit_price: req.body.material_unit_price,
        material_stock_level:req.body.material_stock_level,
    }).then(() => {
        res.status(200).send({
            status: 200,
            message: `Successfully created a driver account.`
        });
    }).catch((err) => {
        res.status(404).send({
            status: 404,
            error: err,
            message: `Unable to create driver account.`
        });
    });
};

exports.deleteMaterialById = (req, res, next) => {
    console.log(req.body);
    driver.findByIdAndDelete({_id: req.body.Id})
        .then(() => {
            res.status(200).send({
                status: 200,
                message: `Successfully deleted a material.`
            });
        }).catch((err) => {
            res.status(404).send({
                status: 404,
                error: err,
                message: `Unable to delete material.`
            });
        });
};

exports.getAllMaterials = (req, res, next) => {
    console.log(`Get All Driver Account`);
    console.log(req.body);
    driver.find({}).then((docs) => {
        res.status(200).send({
            status: 200,
            drivers: docs,
            message: `Successfully returned all materials.`
        });
    }).catch((err) => {
        res.status(404).send({
            status: 404,
            error: err,
            message: `Unable to return all materials.`
        });
    });
};
