// REQUIRES
const express = require("express")
const resource = require("../models/resources")

const router = express.Router()
// GET Resources
router.get("/resources", async (req, res, next) => {
    try {
        const resources = await resource.getResources()
        res.json(resources)
    } catch(err) {
        next(err)
    }
})
// POST Resources
router.post('/resource', (req, res) => {
    const resourceData = req.body;

    resource.addResource(resourceData)
        .then(resource => {
        res.status(201).json(resource);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to add a new resource' });
    });
})

module.exports = router
