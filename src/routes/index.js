const {Router} = require('express');
const router = Router();

router.get('/', (req,res)=> res.json({'Nombre 1': 'Rodrigo', 'Matrícula 1 ': '14000667','Nombre 2':'Raúl','Matrícula 2': '15478963','Nombre 3':'Marío','Matrícula 3': '18123653'}));



module.exports = router;