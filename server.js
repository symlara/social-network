// require express
const express = require('express');

//require mongoose
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(epxress.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

// setup connection to mongoose 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));