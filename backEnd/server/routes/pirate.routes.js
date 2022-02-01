const pirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get("/api/test", pirateController.testResponse);
    app.get("/api/pirates/findAll", pirateController.findAllpirates);
    app.post("/api/pirates/create", pirateController.createpirate);
    app.get("/api/pirates/:_id", pirateController.findOnepirate);
    app.delete("/api/pirates/:_id/delete", pirateController.deletepirate);
    app.patch("/api/pirates/:_id/update", pirateController.updateOnepirate);
    // app.put("/api/pirates/:_id/addTopping", pirateController.addTopping)
}
// main thing it is doing is exporting itself 
// we are exporting content of this file as a function - a function that takes in app itself
// and then makes declarations about the routes and the request types for serverconf