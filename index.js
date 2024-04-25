const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// database 
const mongoose = require('mongoose');
const DATABASE_URI = process.env.MONGO_URI;
mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Database connection successful');
})
  .catch((err) => {
    console.error('Database connection error');
  });

// routes
const appRoutes = require('./src/routes/routes');

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


app.use('/api', appRoutes);


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
