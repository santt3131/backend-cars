const Customer = require("./customer.model");

const findMany = async (req, res)=>{
    try {
        const docs = await Customer.find().lean().exec();
        res.status(200).json({results: docs});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: 'Internal error'});
    }
}

const findCarsByUser = async(req, res)=>{
    const { id } = req.params;
    console.log('id', id);
    try {
        const doc = await Customer.findOne({ _id: id}).populate("cars").exec();
        console.log('docs', doc);
        if(!doc){
            return res.status(400).json({ results : [doc] });
        }
        res.status(200).json({ results: [doc]});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: 'Cannot get Cutomer'});
    }
}

const findOne = async(req, res)=>{
    const { id } = req.params;
    try {
        const doc = await Customer.findOne({ _id: id});
        if(!doc){
            return res.status(400).json({ results : [doc] });
        }
        res.status(200).json({ results: [doc]});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: 'Cannot get Cutomer'});
    }
}

const createOne = async (req, res)=>{
    try {
        const newCustomer = req.body;
        const doc = await Customer.create(newCustomer);
        res.status(200).json({ results : [doc]});
    } catch (error) {
        console.log(e);
        res.status(500).json({ error: " Creation failed"});   
    }
}

const updateOne = async (req,res)=>{
    const { id } = req.params;
    try {
        const doc = await Customer.findOneAndUpdate({ _id: id}, 
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
        const doc = await Customer.findOneAndDelete({ _id: id}, { new: true});
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
    findCarsByUser,
    findMany,
    findOne,
    createOne,
    updateOne,
    deleteOne
}
