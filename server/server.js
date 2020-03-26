const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const port = 3000;
const app = express();
const { mongoose } = require('./db.js');
const adminController = require('./routes/adminController');
const parkController = require('./routes/parkController');
const reservationController = require('./routes/reservationController');
const userController = require('./routes/userController');


app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json()); 


app.use('/api', adminController);
app.use('/api', parkController);
app.use('/api', reservationController);
app.use('/api', userController);




app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});