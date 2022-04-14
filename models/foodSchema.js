const mongoose  = require("mongoose")

const foodSchema = mongoose.Schema({
name:{
type:String,
require:true
},
type:{
    type:String,
    require:true
},
time:{
type:Date,
default:Date.now()
},
ingredients:{
    type:Array,
    require:true
},
recipe:{
    type:Array,
    require:true
}

},{
timestamps:true
}
)
const Food = mongoose.model("Food", foodSchema);
module.exports= Food;