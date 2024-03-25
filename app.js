const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/utma';

mongoose.connect(url_db)
.then(() => {
    console.log('conexion exitosa')
})
.catch((err) =>{
    console.log('no jalo esta madre')
})

const esquema_alumnos= new mongoose.Schema(
    {
       name:{
        type:String
       },
       apepat:{
        type:String
       },
       apemat:{
        type:String
       },
       telnumber:{
        type:Number
       },
       fechanac:{
        type:Date
       }
    }
) 

const alumnos = new mongoose.model('tabla de registro de alumnos', esquema_alumnos)

alumnos.create(
    {
       name:'jesus',
       apepat:'salazar',
       apemat:'Padilla',
       telnumber:12425642,
       fechanac: new Date('2000, 01, 14')
    }
)