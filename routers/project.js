// REQUIRES
const express = require("express")
const project = require("../models/project")

const router = express.Router()
// GET Project
router.get("/projects", async (req, res, next) => {
    try {
        const projects = await project.getProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

// POST Project
router.post('/project', (req, res) => {
    const projectData = req.body;

    project.addProject(projectData)
        .then(project => {
        res.status(201).json(project);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to add a new project' });
    });
})

module.exports = router