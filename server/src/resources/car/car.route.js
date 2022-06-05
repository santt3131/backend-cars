const { Router } = require("express");
const carControllers = require("./car.controllers");
const router = Router();

router.post('/', carControllers.createOne);
router.get('/', carControllers.findMany);

module.exports = router;