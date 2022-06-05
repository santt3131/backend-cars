const Car = require("./car.model");

const findMany = async (req, res)=>{
    try {
        const docs = await Car.find().lean().exec();
        res.status(200).json({results : docs});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: 'Internal error'});
    }
}

const createOne = async (req, res)=>{
    try {
        const newCar = req.body;
        const doc = await Car.create(newCar);
        res.status(200).json({ results: [doc]});
    } catch (error) {
        console.log(e);
        res.status(500),json({ error: "Creation failed"})
    }
}



module.exports = {
    findMany,
    createOne
}