const express = require('express')
const router = express.Router()
const Runner = require('../models/runner')

// getting all
router.get('/', async (req, res) => {
    try {
        const runners = await Runner.find()
        res.json(runners)
    } catch {
        res.status(500).json({ message: err.message })
    }
})

// getting one
router.get('/:id', getRunner, (req, res) => {
    res.json(res.runner)
})

// creating one
router.post('/', async (req, res) => {
    const runner = new Runner({
        name: req.body.name,
        activities: req.body.activities,
        timeOfDay: req.body.timeOfDay,
        avgPace: req.body.avgPace,
        avgDistance: req.body.avgDistance,
        recentActivities: req.body.recentActivities
    })
    try {
        const newRunner = await runner.save()
        res.status(201).json(newRunner)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// updating one
router.patch('/:id', getRunner, async (req, res) => {
    if (req.body.name != null) {
        res.runner.name = req.body.name
    }
    if (req.body.activities != null) {
        res.runner.activities = req.runner.activities
    }
    if (req.body.timeOfDay != null) {
        res.runner.timeOfDay = req.runner.timeOfDay
    }
    if (req.body.avgPace != null) {
        res.runner.avgPace = req.runner.avgPace
    }
    if (req.body.avgDistance != null) {
        res.runner.avgDistance = req.runner.avgDistance
    }
    if (req.body.recentActivities != null) {
        res.runner.recentActivities = req.runner.recentActivities
    }
    try {
        const updatedRunner = await res.runner.save()
        res.json(updatedRunner)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// deleting one
router.delete('/:id', getRunner, async (req, res) => {
    try {
        await res.runner.deleteOne()
        res.json({ message: 'Deleted Runner' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getRunner(req, res, next) {
    let runner
    try {
        runner = await Runner.findById(req.params.id)
        if (runner == null) {
            return res.status(404).json({ message: 'Cannot find runner' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.runner = runner
    next()
}

module.exports = router
