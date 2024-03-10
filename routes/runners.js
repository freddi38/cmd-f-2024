const express = require('express')

const app = express()

// Serve static files from the public directory
app.use(express.static('public'));

// setting up other route handlers
const router = express.Router()

// getting all
router.get('/', (req, res) => {
    res.send('Hello World')
})

// getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// creating one
router.post('/', (req, res) => {

})

// updating one
router.patch('/:id', (req, res) => {

})

// deleting one
router.delete('/:id', (req, res) => {

})

// // Define a route to handle AJAX requests to increment the counter
// router.post('/increment', (req, res) => {
//     // Perform any necessary processing here
//     // For example, update the counter value in a database
//     // For now, let's just send back a simple response
//     res.json({ message: 'Counter incremented successfully!' });
// });

module.exports = router
