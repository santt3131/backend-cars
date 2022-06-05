const { Router } = require("express");
const carControllers = require("./car.controllers");
const router = Router();

router.post('/', carControllers.createOne);
router.get('/', carControllers.findMany);
router.put('/:id', carControllers.updateOne);

module.exports = router;