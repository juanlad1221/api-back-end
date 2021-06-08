
const express = require('express');
var bodyParser = require("body-parser");

const app = express();




//app.use(morgan)
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.get('/api', (req, res) => {
  res.json(data)
  
});

app.put('/api', (req, res) => {
  res.json(req.body)
  //res.send('po')
  
});


app.listen(3001, () => {
  console.log('server started...');
});



//Datos
const data = [
  {
    id: getRandom(),
    paciente: "juan ponce",
    odontologo: "Raul Castro",
    placas: 2,
    inicio: "21/08/21",
    fin: "22/09/21"
  },

  {
    id: getRandom(),
    paciente: "lorena Sierra",
    odontologo: "Raul Castro",
    placas: 0,
    inicio: "11/05/21",
    fin: "23/06/21"
  },

  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  },
  {
    id: getRandom(),
    paciente: "juana Molina",
    odontologo: "Jorge Cardozo",
    placas: 1,
    inicio: "08/08/21",
    fin: "09/08/21"
  }
];

//Generador id
function getRandom() {
  return Math.floor(Math.random() * 100)
}
