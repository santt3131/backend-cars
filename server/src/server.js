const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {PORT} = require('./config');
const db = require('./db');

//creamos el objeto de express
const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const carRouter = require('./resources/car/car.route');
app.use('/cars', carRouter);

/*const customerRouter = require('./resources/customer/customer.route');
app.use('/customers', customerRouter);*/

const startServer = async()=>{
    await db.connect();
    app.listen(PORT,()=>{
        console.log(`CARS API listening on : ${PORT}`);
    });
}

startServer();


