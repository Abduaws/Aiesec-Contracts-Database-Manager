const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const contractRoutes = require('./routes/contractRoutes');
const companyRoutes = require('./routes/companyRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

//Connect to MongoDB (Note: you have to use your own database URI using .env file)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((res) => {
        console.log('Connected to DB')
        app.listen(3001);
    })
    .catch((err) => {console.log('Err While Connecting to DB', err)})

//Configure Express js for use
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(cors({origin:"*", credentials:true, optionsSuccessStatus:200}));

//Configure Used Routes
app.use('/api/users', userRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/companies', companyRoutes);