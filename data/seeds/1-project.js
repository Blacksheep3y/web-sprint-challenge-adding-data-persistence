exports.seed = async function(knex) {
	await knex("project").insert([   
	{ name: "Do the Scarn", description: "Watch The Office ‎Season 7; Episode 17 Threat Level Midnight to learn how to do 'The Scarn'. ", completed: true },
    { name: "Cut steel", description: "Train as hard as Roronoa Zoro in order to find out how to cut even steel.", completed: false },
    { name: "Become a Tri State Wizard Tournament Champion", description: "You must first become a wizard, and practice hard every day until you can master your most basic spells and eventually fend off against Lord Voldemort in your process to achieve championship victory.", completed: false },
	])
}