const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const contractRoutes = require('./routes/contractRoutes');

const app = express();

const dburl = `${process.env.MONGODB_URI}`
mongoose.connect(dburl, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((res) => {
        console.log('Connected to DB')
        app.listen(3001);
    })
    .catch((err) => {console.log('Err While Connecting to DB', err)})

app.use(express.static('public'));
app.use(express.urlencoded( { extended: true } ));

app.use('/api/users', userRoutes);
app.use('/api/contracts', contractRoutes);