const db = require("../data/config")

function getTasks() {
    return db("task")
}

function findById(id) {
    return db("task")
        .where({id})
        .first();
}

function addTask(task) {
    return db("task")
        .insert(task)
        .then(id => {
            return findById(id[0]);
        });
}

module.exports = {
    getTasks,
    findById,
    addTask,
}