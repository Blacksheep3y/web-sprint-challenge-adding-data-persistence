exports.seed = async function(knex) {
	await knex("resources").insert([   
	{ project_id: 1, name: "Smart Device", description: "Any smart device such as a laptop would do" },
    { project_id: 1, name: "Netflix", description: "You will need a Netflix subscription or your friend's Netflix account info lol." },
    { project_id: 2, name: "Swords", description: "Preferably three" },
    { project_id: 2, name: "Determination", description: "You will need the ultimate willpower and determination to be able to complete this project." },
    { project_id: 3, name: "Wand", description: "You must visit your local wizard wand shop, remember the wand chooses the wizard." },
    { project_id: 3, name: "Time", description: "You must need time to practice you wizard skills, and also time becuase you must be 17 or older to enter." },
	])
}