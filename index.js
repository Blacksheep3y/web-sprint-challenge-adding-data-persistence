// REQUIRE (express, helmet)
const express = require("express")
const helmet = require("helmet")
// REQUIRE (routers)
const projectRouter = require("./routers/project")
const resourceRouter = require("./routers/resources")
const taskRouter = require("./routers/task")
// USE EXPRESS
const server = express()
const port = process.env.PORT || 4422
// USE EXPRESS > JSON / HELMET
server.use(helmet())
server.use(express.json())
// USE ROUTERS
server.use(projectRouter)
server.use(resourceRouter)
server.use(taskRouter)

server.get("/", (req, res) =>{
    res.send("Database for Lambda Sprint Challenge")
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "OOPS! There was a problem.",
	})
})

server.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`)
})