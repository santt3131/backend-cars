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

const findOne = async(req,res)=>{
    const { id } = req.params;
    try {
        const doc = await Car.findOne({ _id: id});
        if(!doc){
            return res.status(404).json({ error : "Not found"});
        }
        res.status(200).json({ results: [doc]});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: 'Cannot get Car'});
    }
}

const createOne = async (req, res)=>{
    try {
        const newCar = req.body;
        const doc = await Car.create(newCar);
        res.status(201).json({ results: [doc]});
    } catch (error) {
        console.log(e);
        res.status(500),json({ error: "Creation failed"})
    }
}

const updateOne = async (req,res)=>{
    const { id } = req.params;
    try {
        const doc = await Car.findOneAndUpdate({ _id: id}, 
            req.body, { new: true});
        if(!doc){
            return res.status(404).json({ error : "Not found"});
        }
        res.status(200).json({ results: [doc]});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: 'Cannot update'});
    }
}

const deleteOne = async(req, res)=>{
    const { id } = req.params;
    try {
        const doc = await Car.findOneAndDelete({ _id: id}, { new: true});
        if(!doc){
            return res.status(404).json({ error : "Not found"});
        }
        res.status(200).json({ results: [doc]});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: 'Cannot delete'});
    }
}

module.exports = {
    findMany,
    createOne,
    findOne,
    updateOne,
    deleteOne
}