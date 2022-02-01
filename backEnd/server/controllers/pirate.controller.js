const pirate = require("../models/pirate.model");
// we are importing model because it will tell us what info in database is going to look like
// we can use pirate as object to talk to database

module.exports.testResponse = (req, res) => {
    res.json({message: "hey it's me"});
}

module.exports.findAllpirates = (req,res) => {
    pirate.find({}).sort([['pirateName', 1]])
        .then(results => res.json({results:results}))
        .catch(err =>res.status(400).json({message:"that didnt quite work", err}));
}

module.exports.createpirate = (req,res) => {
    req.body.score = 0;
    pirate.create(req.body)
    .then(newpirate =>res.json({results:newpirate}))
    .catch(err=>res.status(400).json({message:"that didnt quite work", err}));
}

module.exports.findOnepirate = (req, res) => {
    pirate.findOne({_id: req.params._id})
        .then(results => res.json({results:results}))
        .catch(err =>res.status(400).json({message:"that didnt quite work", err}));
}

module.exports.deletepirate = (req, res) => {
    pirate.deleteOne({_id: req.params._id})
        .then(results => res.json({results:results}))
        .catch(err =>res.status(400).json({message:"that didnt quite work", err}));
}

module.exports.updateOnepirate = (req, res) => {
    pirate.updateOne({_id:req.params._id}, req.body, {runValidators: true})
    .then(results => res.json({results:results}))
        .catch(err =>res.status(400).json({message:"that didnt quite work", err}));
}

