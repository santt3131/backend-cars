const { Router } = require("express");
const carControllers = require("./car.controllers");
const router = Router();

router.post('/', carControllers.createOne);
router.get('/', carControllers.findMany);
router.get('/:id',carControllers.findOne);
router.put('/:id', carControllers.updateOne);
router.delete('/:id', carControllers.deleteOne);

module.exports = router;