const { Router } = require("express");
const customerControllers= require("./customer.controllers");
const router = Router();

router.post('/', customerControllers.createOne);
router.get('/', customerControllers.findMany);
router.get('/:id', customerControllers.findOne);
router.put('/:id', customerControllers.updateOne);
router.delete('/:id', customerControllers.deleteOne);

module.exports = router;