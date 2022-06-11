
db.createCollection('car');
db.createCollections('customers');

db.cars.insertMany([{ model: 'For f-150', status: 'list', price: 230 }, 
{ model: 'For f-140', status: 'waiting', price: 250 }]);

db.customers.insertMany([{ fName: 'Santiago', lName: 'Bruno', email: 'santt@gmail.com', mobile: 686635586 }, 
{ fName: 'Elizabeth', lName: 'Perez', email: 'bep@gmail.com', mobile: 686635589 }]);