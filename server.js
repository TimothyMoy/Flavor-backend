const express = require('express');
const routes = require('./routes');

const app = express();
const cors = require('cors')

// middleware - API routes
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello');
});

// Server Listener
app.listen(4000, ()=> {
  console.log('this is on port 4000')
})

