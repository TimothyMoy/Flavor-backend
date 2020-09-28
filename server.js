const express = require('express');
const routes = require('./routes');

const app = express();
const cors = require('cors')

// CORS - cross origin resource sharing
app.use(cors())

// middleware - JSON parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// middleware - API routes
// recipes routes
app.use('/api/v1/recipes', routes.recipes);

// Server Listener
app.listen(4000, ()=> {
  console.log('this is on port 4000')
})

