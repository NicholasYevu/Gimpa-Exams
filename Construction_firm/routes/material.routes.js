// jshint esversion:6 
// ================================ creating application routes ===================================//
module.exports = app => {
    const driver = require(`../controllers/material.controllers`);

// create routes
    app.route(`/createMaterial`)
        .post(driver.createMaterial);

//  delete routes
    app.route(`/deleteMaterialById`)
        .delete(driver.deleteMaterialById);

// get routes
    app.route(`/getAllMaterials`)
        .put(driver.getAllMaterials);
};