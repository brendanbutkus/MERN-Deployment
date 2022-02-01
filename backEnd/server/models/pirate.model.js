const mongoose = require("mongoose");

const pirateSchema = new mongoose.Schema({
        pirateName: {type:String,
            required: [true, "you need a name"],
            minLength: [3, "name needs at least 3 characters!"]},
        imgUrl: {type: String,
            required: [true, "you need an image!"]},
        treasureChests: {type: Number,
            required: [true, "you need a number of treasure chests!"],
            min: [1, "platform needs at least 1 treasure chest"]},
        pirateCatchPhrase: {type: String,
            required: [true, "you need a catch phrase!"],
            min: [3, "you need at least 3 characters"]},
        crewPosition: {type:String,
            required: [true, "you need a crew position!"],
            enum: [4, "captain", "quarter master", "boatswain", "powder monkey"] },
        pegLeg: {type:Boolean},
        eyePatch: {type:Boolean},
        hookHand: {type:Boolean},
        
        
        
    

}, {timestamps: true})

const pirate = mongoose.model("pirate", pirateSchema);

module.exports = pirate;