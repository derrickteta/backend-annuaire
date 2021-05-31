const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const addressRoutes = require('./routes/address');
const userRoutes = require('./routes/user');

// ligne du driver pour se connecter a la base de donnée mongobd
mongoose.connect('mongodb+srv://annuaire:annuaire@cluster0.jmbi0.mongodb.net/annuaire?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
//fin

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use('/api/address', addressRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;