const mongoose = require('mongoose');


//------CONECTION DB MONGO ATLAS-------------------------------------------------------
mongoose.connect('mongodb+srv://juanlad1221:yonome1221@clustershool-widaw.mongodb.net/db_app_profes_iar?retryWrites=true',{useUnifiedTopology: true, useNewUrlParser:true},(err, res)=>{
//mongoose.connect('mongodb://localhost/db_paola',{useNewUrlParser: true},(err, res)=>{
	if(err){console.log('Error: En consulta...',err)};
	console.log('Data Base ok...');
})