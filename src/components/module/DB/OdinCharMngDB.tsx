import mongoose from 'mongoose';

const url = "mongodb+srv://chanhwuicoco:m6400lin@chcluster.fuuee.mongodb.net/OdinDB?retryWrites=true&w=majority";
mongoose.connect(url);
    
const charMngSchema = new mongoose.Schema({
    userId : {type:String, required: true},
    userPw : {type:String, required: true},
    userGroup : String,        
    charInfo : [{
        charName : String,
        charJob : String,
        charLev : Number,
        charDesc : String,
        charGongHeo : Boolean,
        charNanJangEe : Boolean,
        charPrison : Boolean
    }]
});

export const charMngModel = mongoose.model('OdinCollection', charMngSchema);