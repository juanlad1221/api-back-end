const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const materias_schema = Schema({
    name:{type:String, requerid:true},
   
    
})

//Exporto modelo
module.exports = mongoose.model('materias',materias_schema);