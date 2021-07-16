
const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;

//Shemas
const Materias = require('./MateriasSchema')




const app = express();






//Rutas
app.get('/api',async (req, res) => {
  //Busco materias todas
  let materias = await Materias.where({})
  console.log(materias)
  res.status(200).json(materias)
})
 
app.post('/apo',async (req, res) => {
  //let id = req.body.id
  let id='60df9ad9d24cd4a4265fcd91'
  //Busco si existe la materia.
  let result = await Materias.where({_id:ObjectId(id)})
  console.log(req.body)
  res.send('ok')
})










//Conexion BD
require('./conexion');



//--------------------------SERVER---------------------------------------------------------
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Server corriendo en ${app.get('port')}`)
})
//------------------------------------------------------------------------------------------





