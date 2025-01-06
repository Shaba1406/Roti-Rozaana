const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//available datatypes -> bool ,Array
const FoodFormSchema = new Schema(
  {
   foodName:{
      type:String,
      required: true
    },
    isVeg:{
      type:Boolean,
      required:true
    },
    dateTime: {
        type: Date,
        default: Date.now
    },
    quantity:{
      type:String,
      required:true
    },
    extraDetail:{
      type:String,
      required:true
    },
    imageUrl: {
        type:String  
    }
  }
)
                   //          collectionname, schema , export name
module.exports = mongoose.model('FoodForm', FoodFormSchema , 'FoodForm')