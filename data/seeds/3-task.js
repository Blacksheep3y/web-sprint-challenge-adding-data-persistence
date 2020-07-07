exports.seed = async function(knex) {
	await knex("task").insert([   
    { project_id: 1, description: "search online for free Netflix accounts", notes: "or perhaps you can YouTube a clip of how to do the scarn", completed: true },
    { project_id: 1, description: "practice your newly discovered Scarn dance moves", notes: "work your feet and hands and body", completed: true },
    { project_id: 2, description: "learn how to slash something that can easily be cut like a leaf without cutting it.", notes: "It is more difficult than you think", completed: false },
    { project_id: 2, description: "practice cutting the skin of an animal", notes: "preferably a monster and not a human", completed: false },
    { project_id: 3, description: "become a Great Wizard", notes: "This is determined by how well you can fend off attacks", completed: false },
    { project_id: 3, description: "practice as many spells as you can until you turn 17", notes: "If you are already 17, place your name in the CUP!", completed: true },    
	])
}