const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const contractRoutes = require('./routes/contractRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((res) => {
        console.log('Connected to DB')
        app.listen(3001);
    })
    .catch((err) => {console.log('Err While Connecting to DB', err)})

app.use(express.static('public'));
app.use(express.urlencoded( { extended: true } ));

app.use('/api/users', userRoutes);
app.use('/api/contracts', contractRoutes);