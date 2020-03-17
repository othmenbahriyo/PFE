const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const stripe = require('stripe')('sk_test_v0KTPT1aBYIxUxOgxDQg42dr00MPBE0cRR');
const api = require('./server/routes/api');
const port = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);


 
 app.get('*', (req, res) => {
   res.send('hi from server');
 });

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});