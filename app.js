// app.js

const express = require('express');
const apiRoutes = require('./runners.js');

const app = express();

// Use the route handler for API requests
app.use('/', apiRoutes);

// Other middleware and route handlers
// ...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});