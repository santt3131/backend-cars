
db.createCollection('car');
db.createCollections('customers');

db.cars.insertMany([
    { model: 'Ford f-150', 
      price: 23000
    }, 
    { model: 'Ford f-140', 
      price: 25000
    },
    { model: 'Mercedes f-150', 
      price: 55000
    },
    { model: 'Mercedes f-140', 
      price: 55000
    }
]);



db.customers.insertMany([
  { fName: 'Santiago', 
    lName: 'Bruno', 
    email: 'santt@gmail.com', 
    mobile: 686635586,
    cars: [ 
      '62a47a6f9ddb27a20fd1a214',
      '62a47a6f9ddb27a20fd1a215',
    ]
  }, 
  { fName: 'Elizabeth',
    lName: 'Perez', 
    email: 'bep@gmail.com', 
    mobile: 686635589,
    cars: [ 
      '62a47a6f9ddb27a20fd1a216'
    ]
  }
]);
