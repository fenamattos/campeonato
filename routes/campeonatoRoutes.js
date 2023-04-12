const express = require('express');
// Importamos o router do express
const router = express.Router();
const controller = require("../controllers/timeController");

// Para usar ele, usamos router.METODO HTTP => Ex: router.get ou router.post
// Além dele, precisamos informar 2 coisas: o nome da rota e 
// qual fumção (controller) executar
router.get("/consultar-equipe", controller.consultarTime);
module.exports = router;